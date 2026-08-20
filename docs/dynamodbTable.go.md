# `dynamodbTable` Submodule <a name="`dynamodbTable` Submodule" id="@cdktn/provider-awscc.dynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTable <a name="DynamodbTable" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table awscc_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTable(scope Construct, id *string, config DynamodbTableConfig) DynamodbTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig">DynamodbTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig">DynamodbTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions">PutAttributeDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification">PutContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes">PutGlobalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification">PutImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification">PutKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes">PutLocalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput">PutOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification">PutPointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput">PutProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy">PutResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification">PutSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification">PutStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification">PutTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput">PutWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetAttributeDefinitions">ResetAttributeDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetBillingMode">ResetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetContributorInsightsSpecification">ResetContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndexes">ResetGlobalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetImportSourceSpecification">ResetImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetKinesisStreamSpecification">ResetKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetLocalSecondaryIndexes">ResetLocalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOnDemandThroughput">ResetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetPointInTimeRecoverySpecification">ResetPointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetResourcePolicy">ResetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetSseSpecification">ResetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetStreamSpecification">ResetStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableClass">ResetTableClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTimeToLiveSpecification">ResetTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetWarmThroughput">ResetWarmThroughput</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributeDefinitions` <a name="PutAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions"></a>

```go
func PutAttributeDefinitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutContributorInsightsSpecification` <a name="PutContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification"></a>

```go
func PutContributorInsightsSpecification(value DynamodbTableContributorInsightsSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---

##### `PutGlobalSecondaryIndexes` <a name="PutGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes"></a>

```go
func PutGlobalSecondaryIndexes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImportSourceSpecification` <a name="PutImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification"></a>

```go
func PutImportSourceSpecification(value DynamodbTableImportSourceSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---

##### `PutKinesisStreamSpecification` <a name="PutKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification"></a>

```go
func PutKinesisStreamSpecification(value DynamodbTableKinesisStreamSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---

##### `PutLocalSecondaryIndexes` <a name="PutLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes"></a>

```go
func PutLocalSecondaryIndexes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnDemandThroughput` <a name="PutOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput"></a>

```go
func PutOnDemandThroughput(value DynamodbTableOnDemandThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `PutPointInTimeRecoverySpecification` <a name="PutPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification"></a>

```go
func PutPointInTimeRecoverySpecification(value DynamodbTablePointInTimeRecoverySpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---

##### `PutProvisionedThroughput` <a name="PutProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput"></a>

```go
func PutProvisionedThroughput(value DynamodbTableProvisionedThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---

##### `PutResourcePolicy` <a name="PutResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy"></a>

```go
func PutResourcePolicy(value DynamodbTableResourcePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---

##### `PutSseSpecification` <a name="PutSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification"></a>

```go
func PutSseSpecification(value DynamodbTableSseSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---

##### `PutStreamSpecification` <a name="PutStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification"></a>

```go
func PutStreamSpecification(value DynamodbTableStreamSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeToLiveSpecification` <a name="PutTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification"></a>

```go
func PutTimeToLiveSpecification(value DynamodbTableTimeToLiveSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---

##### `PutWarmThroughput` <a name="PutWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput"></a>

```go
func PutWarmThroughput(value DynamodbTableWarmThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---

##### `ResetAttributeDefinitions` <a name="ResetAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetAttributeDefinitions"></a>

```go
func ResetAttributeDefinitions()
```

##### `ResetBillingMode` <a name="ResetBillingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetBillingMode"></a>

```go
func ResetBillingMode()
```

##### `ResetContributorInsightsSpecification` <a name="ResetContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetContributorInsightsSpecification"></a>

```go
func ResetContributorInsightsSpecification()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetGlobalSecondaryIndexes` <a name="ResetGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndexes"></a>

```go
func ResetGlobalSecondaryIndexes()
```

##### `ResetImportSourceSpecification` <a name="ResetImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetImportSourceSpecification"></a>

```go
func ResetImportSourceSpecification()
```

##### `ResetKinesisStreamSpecification` <a name="ResetKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetKinesisStreamSpecification"></a>

```go
func ResetKinesisStreamSpecification()
```

##### `ResetLocalSecondaryIndexes` <a name="ResetLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetLocalSecondaryIndexes"></a>

```go
func ResetLocalSecondaryIndexes()
```

##### `ResetOnDemandThroughput` <a name="ResetOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOnDemandThroughput"></a>

```go
func ResetOnDemandThroughput()
```

##### `ResetPointInTimeRecoverySpecification` <a name="ResetPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetPointInTimeRecoverySpecification"></a>

```go
func ResetPointInTimeRecoverySpecification()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetProvisionedThroughput"></a>

```go
func ResetProvisionedThroughput()
```

##### `ResetResourcePolicy` <a name="ResetResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetResourcePolicy"></a>

```go
func ResetResourcePolicy()
```

##### `ResetSseSpecification` <a name="ResetSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetSseSpecification"></a>

```go
func ResetSseSpecification()
```

##### `ResetStreamSpecification` <a name="ResetStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetStreamSpecification"></a>

```go
func ResetStreamSpecification()
```

##### `ResetTableClass` <a name="ResetTableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableClass"></a>

```go
func ResetTableClass()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeToLiveSpecification` <a name="ResetTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTimeToLiveSpecification"></a>

```go
func ResetTimeToLiveSpecification()
```

##### `ResetWarmThroughput` <a name="ResetWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetWarmThroughput"></a>

```go
func ResetWarmThroughput()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DynamodbTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.DynamodbTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.DynamodbTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.DynamodbTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.DynamodbTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DynamodbTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DynamodbTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DynamodbTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DynamodbTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitions">AttributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList">DynamodbTableAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecification">ContributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference">DynamodbTableContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexes">GlobalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList">DynamodbTableGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecification">ImportSourceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference">DynamodbTableImportSourceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecification">KinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference">DynamodbTableKinesisStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexes">LocalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList">DynamodbTableLocalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecification">PointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference">DynamodbTablePointInTimeRecoverySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference">DynamodbTableProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference">DynamodbTableResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference">DynamodbTableSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecification">StreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference">DynamodbTableStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList">DynamodbTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecification">TimeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference">DynamodbTableTimeToLiveSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference">DynamodbTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitionsInput">AttributeDefinitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingModeInput">BillingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecificationInput">ContributorInsightsSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexesInput">GlobalSecondaryIndexesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecificationInput">ImportSourceSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchemaInput">KeySchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecificationInput">KinesisStreamSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexesInput">LocalSecondaryIndexesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughputInput">OnDemandThroughputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecificationInput">PointInTimeRecoverySpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicyInput">ResourcePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecificationInput">SseSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecificationInput">StreamSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClassInput">TableClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecificationInput">TimeToLiveSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughputInput">WarmThroughputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingMode">BillingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchema">KeySchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClass">TableClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttributeDefinitions`<sup>Required</sup> <a name="AttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitions"></a>

```go
func AttributeDefinitions() DynamodbTableAttributeDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList">DynamodbTableAttributeDefinitionsList</a>

---

##### `ContributorInsightsSpecification`<sup>Required</sup> <a name="ContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecification"></a>

```go
func ContributorInsightsSpecification() DynamodbTableContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference">DynamodbTableContributorInsightsSpecificationOutputReference</a>

---

##### `GlobalSecondaryIndexes`<sup>Required</sup> <a name="GlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexes"></a>

```go
func GlobalSecondaryIndexes() DynamodbTableGlobalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList">DynamodbTableGlobalSecondaryIndexesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportSourceSpecification`<sup>Required</sup> <a name="ImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecification"></a>

```go
func ImportSourceSpecification() DynamodbTableImportSourceSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference">DynamodbTableImportSourceSpecificationOutputReference</a>

---

##### `KinesisStreamSpecification`<sup>Required</sup> <a name="KinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecification"></a>

```go
func KinesisStreamSpecification() DynamodbTableKinesisStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference">DynamodbTableKinesisStreamSpecificationOutputReference</a>

---

##### `LocalSecondaryIndexes`<sup>Required</sup> <a name="LocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexes"></a>

```go
func LocalSecondaryIndexes() DynamodbTableLocalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList">DynamodbTableLocalSecondaryIndexesList</a>

---

##### `OnDemandThroughput`<sup>Required</sup> <a name="OnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughput"></a>

```go
func OnDemandThroughput() DynamodbTableOnDemandThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a>

---

##### `PointInTimeRecoverySpecification`<sup>Required</sup> <a name="PointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecification"></a>

```go
func PointInTimeRecoverySpecification() DynamodbTablePointInTimeRecoverySpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference">DynamodbTablePointInTimeRecoverySpecificationOutputReference</a>

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() DynamodbTableProvisionedThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference">DynamodbTableProvisionedThroughputOutputReference</a>

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicy"></a>

```go
func ResourcePolicy() DynamodbTableResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference">DynamodbTableResourcePolicyOutputReference</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecification"></a>

```go
func SseSpecification() DynamodbTableSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference">DynamodbTableSseSpecificationOutputReference</a>

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `StreamSpecification`<sup>Required</sup> <a name="StreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecification"></a>

```go
func StreamSpecification() DynamodbTableStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference">DynamodbTableStreamSpecificationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tags"></a>

```go
func Tags() DynamodbTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList">DynamodbTableTagsList</a>

---

##### `TimeToLiveSpecification`<sup>Required</sup> <a name="TimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecification"></a>

```go
func TimeToLiveSpecification() DynamodbTableTimeToLiveSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference">DynamodbTableTimeToLiveSpecificationOutputReference</a>

---

##### `WarmThroughput`<sup>Required</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughput"></a>

```go
func WarmThroughput() DynamodbTableWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference">DynamodbTableWarmThroughputOutputReference</a>

---

##### `AttributeDefinitionsInput`<sup>Optional</sup> <a name="AttributeDefinitionsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitionsInput"></a>

```go
func AttributeDefinitionsInput() interface{}
```

- *Type:* interface{}

---

##### `BillingModeInput`<sup>Optional</sup> <a name="BillingModeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingModeInput"></a>

```go
func BillingModeInput() *string
```

- *Type:* *string

---

##### `ContributorInsightsSpecificationInput`<sup>Optional</sup> <a name="ContributorInsightsSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecificationInput"></a>

```go
func ContributorInsightsSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalSecondaryIndexesInput`<sup>Optional</sup> <a name="GlobalSecondaryIndexesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexesInput"></a>

```go
func GlobalSecondaryIndexesInput() interface{}
```

- *Type:* interface{}

---

##### `ImportSourceSpecificationInput`<sup>Optional</sup> <a name="ImportSourceSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecificationInput"></a>

```go
func ImportSourceSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `KeySchemaInput`<sup>Optional</sup> <a name="KeySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchemaInput"></a>

```go
func KeySchemaInput() *string
```

- *Type:* *string

---

##### `KinesisStreamSpecificationInput`<sup>Optional</sup> <a name="KinesisStreamSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecificationInput"></a>

```go
func KinesisStreamSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `LocalSecondaryIndexesInput`<sup>Optional</sup> <a name="LocalSecondaryIndexesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexesInput"></a>

```go
func LocalSecondaryIndexesInput() interface{}
```

- *Type:* interface{}

---

##### `OnDemandThroughputInput`<sup>Optional</sup> <a name="OnDemandThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughputInput"></a>

```go
func OnDemandThroughputInput() interface{}
```

- *Type:* interface{}

---

##### `PointInTimeRecoverySpecificationInput`<sup>Optional</sup> <a name="PointInTimeRecoverySpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecificationInput"></a>

```go
func PointInTimeRecoverySpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughputInput"></a>

```go
func ProvisionedThroughputInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcePolicyInput`<sup>Optional</sup> <a name="ResourcePolicyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicyInput"></a>

```go
func ResourcePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `SseSpecificationInput`<sup>Optional</sup> <a name="SseSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecificationInput"></a>

```go
func SseSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `StreamSpecificationInput`<sup>Optional</sup> <a name="StreamSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecificationInput"></a>

```go
func StreamSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `TableClassInput`<sup>Optional</sup> <a name="TableClassInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClassInput"></a>

```go
func TableClassInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeToLiveSpecificationInput`<sup>Optional</sup> <a name="TimeToLiveSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecificationInput"></a>

```go
func TimeToLiveSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `WarmThroughputInput`<sup>Optional</sup> <a name="WarmThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughputInput"></a>

```go
func WarmThroughputInput() interface{}
```

- *Type:* interface{}

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingMode"></a>

```go
func BillingMode() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchema"></a>

```go
func KeySchema() *string
```

- *Type:* *string

---

##### `TableClass`<sup>Required</sup> <a name="TableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClass"></a>

```go
func TableClass() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableAttributeDefinitions <a name="DynamodbTableAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableAttributeDefinitions {
	AttributeName: *string,
	AttributeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeName">AttributeName</a></code> | <code>*string</code> | A name for the attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeType">AttributeType</a></code> | <code>*string</code> | The data type for the attribute, where:   +  ``S`` - the attribute is of type String   +  ``N`` - the attribute is of type Number   +  ``B`` - the attribute is of type Binary. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

A name for the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `AttributeType`<sup>Optional</sup> <a name="AttributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeType"></a>

```go
AttributeType *string
```

- *Type:* *string

The data type for the attribute, where:   +  ``S`` - the attribute is of type String   +  ``N`` - the attribute is of type Number   +  ``B`` - the attribute is of type Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_type DynamodbTable#attribute_type}

---

### DynamodbTableConfig <a name="DynamodbTableConfig" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KeySchema: *string,
	AttributeDefinitions: interface{},
	BillingMode: *string,
	ContributorInsightsSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification,
	DeletionProtectionEnabled: interface{},
	GlobalSecondaryIndexes: interface{},
	ImportSourceSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableImportSourceSpecification,
	KinesisStreamSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification,
	LocalSecondaryIndexes: interface{},
	OnDemandThroughput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableOnDemandThroughput,
	PointInTimeRecoverySpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification,
	ProvisionedThroughput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableProvisionedThroughput,
	ResourcePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableResourcePolicy,
	SseSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableSseSpecification,
	StreamSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableStreamSpecification,
	TableClass: *string,
	TableName: *string,
	Tags: interface{},
	TimeToLiveSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification,
	WarmThroughput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableWarmThroughput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.keySchema">KeySchema</a></code> | <code>*string</code> | Specifies the attributes that make up the primary key for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.attributeDefinitions">AttributeDefinitions</a></code> | <code>interface{}</code> | A list of attributes that describe the key schema for the table and indexes. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.billingMode">BillingMode</a></code> | <code>*string</code> | Specify how you are charged for read and write throughput and how you manage capacity. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.contributorInsightsSpecification">ContributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | Determines if a table is protected from deletion. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndexes">GlobalSecondaryIndexes</a></code> | <code>interface{}</code> | Global secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.importSourceSpecification">ImportSourceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | Specifies the properties of data being imported from the S3 bucket source to the" table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.kinesisStreamSpecification">KinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | The Kinesis Data Streams configuration for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndexes">LocalSecondaryIndexes</a></code> | <code>interface{}</code> | Local secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | Sets the maximum number of read and write units for the specified on-demand table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecoverySpecification">PointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | The settings used to enable point in time recovery. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | An AWS resource-based policy document in JSON format that will be attached to the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | Specifies the settings to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.streamSpecification">StreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | The settings for the DDB table stream, which captures changes to items stored in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableClass">TableClass</a></code> | <code>*string</code> | The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableName">TableName</a></code> | <code>*string</code> | A name for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.timeToLiveSpecification">TimeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | Specifies the Time to Live (TTL) settings for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | Represents the warm throughput (in read units per second and write units per second) for creating a table. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.keySchema"></a>

```go
KeySchema *string
```

- *Type:* *string

Specifies the attributes that make up the primary key for the table.

The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `AttributeDefinitions`<sup>Optional</sup> <a name="AttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.attributeDefinitions"></a>

```go
AttributeDefinitions interface{}
```

- *Type:* interface{}

A list of attributes that describe the key schema for the table and indexes.

This property is required to create a DDB table.
Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_definitions DynamodbTable#attribute_definitions}

---

##### `BillingMode`<sup>Optional</sup> <a name="BillingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.billingMode"></a>

```go
BillingMode *string
```

- *Type:* *string

Specify how you are charged for read and write throughput and how you manage capacity.

Valid values include:

* `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for most DynamoDB workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).
* `PROVISIONED` - We recommend using `PROVISIONED` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).

If not specified, the default is `PROVISIONED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}

---

##### `ContributorInsightsSpecification`<sup>Optional</sup> <a name="ContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.contributorInsightsSpecification"></a>

```go
ContributorInsightsSpecification DynamodbTableContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Determines if a table is protected from deletion.

When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}

---

##### `GlobalSecondaryIndexes`<sup>Optional</sup> <a name="GlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndexes"></a>

```go
GlobalSecondaryIndexes interface{}
```

- *Type:* interface{}

Global secondary indexes to be created on the table.

You can create up to 20 global secondary indexes.
If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is `ACTIVE`. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
Updates are not supported. The following are exceptions:

* If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
* You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#global_secondary_indexes DynamodbTable#global_secondary_indexes}

---

##### `ImportSourceSpecification`<sup>Optional</sup> <a name="ImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.importSourceSpecification"></a>

```go
ImportSourceSpecification DynamodbTableImportSourceSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

Specifies the properties of data being imported from the S3 bucket source to the" table.

If you specify the `ImportSourceSpecification` property, and also specify either the `StreamSpecification`, the `TableClass` property, the `DeletionProtectionEnabled` property, or the `WarmThroughput` property, the IAM entity creating/updating stack must have `UpdateTable` permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#import_source_specification DynamodbTable#import_source_specification}

---

##### `KinesisStreamSpecification`<sup>Optional</sup> <a name="KinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.kinesisStreamSpecification"></a>

```go
KinesisStreamSpecification DynamodbTableKinesisStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

The Kinesis Data Streams configuration for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#kinesis_stream_specification DynamodbTable#kinesis_stream_specification}

---

##### `LocalSecondaryIndexes`<sup>Optional</sup> <a name="LocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndexes"></a>

```go
LocalSecondaryIndexes interface{}
```

- *Type:* interface{}

Local secondary indexes to be created on the table.

You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#local_secondary_indexes DynamodbTable#local_secondary_indexes}

---

##### `OnDemandThroughput`<sup>Optional</sup> <a name="OnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput"></a>

```go
OnDemandThroughput DynamodbTableOnDemandThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

Sets the maximum number of read and write units for the specified on-demand table.

If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `PointInTimeRecoverySpecification`<sup>Optional</sup> <a name="PointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecoverySpecification"></a>

```go
PointInTimeRecoverySpecification DynamodbTablePointInTimeRecoverySpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

The settings used to enable point in time recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#point_in_time_recovery_specification DynamodbTable#point_in_time_recovery_specification}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisionedThroughput"></a>

```go
ProvisionedThroughput DynamodbTableProvisionedThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``.

For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
If you set `BillingMode` as `PROVISIONED`, you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST`, you cannot specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `ResourcePolicy`<sup>Optional</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.resourcePolicy"></a>

```go
ResourcePolicy DynamodbTableResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

An AWS resource-based policy document in JSON format that will be attached to the table.

When you attach a resource-based policy while creating a table, the policy application is *strongly consistent*.
The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
You need to specify the `CreateTable` and `PutResourcePolicy` IAM actions for authorizing a user to create a table with a resource-based policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `SseSpecification`<sup>Optional</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.sseSpecification"></a>

```go
SseSpecification DynamodbTableSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

Specifies the settings to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#sse_specification DynamodbTable#sse_specification}

---

##### `StreamSpecification`<sup>Optional</sup> <a name="StreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.streamSpecification"></a>

```go
StreamSpecification DynamodbTableStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

The settings for the DDB table stream, which captures changes to items stored in the table.

Including this property in your CFNlong template automatically enables streaming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#stream_specification DynamodbTable#stream_specification}

---

##### `TableClass`<sup>Optional</sup> <a name="TableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableClass"></a>

```go
TableClass *string
```

- *Type:* *string

The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

A name for the table.

If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#table_name DynamodbTable#table_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}

---

##### `TimeToLiveSpecification`<sup>Optional</sup> <a name="TimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.timeToLiveSpecification"></a>

```go
TimeToLiveSpecification DynamodbTableTimeToLiveSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

Specifies the Time to Live (TTL) settings for the table.

For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#time_to_live_specification DynamodbTable#time_to_live_specification}

---

##### `WarmThroughput`<sup>Optional</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.warmThroughput"></a>

```go
WarmThroughput DynamodbTableWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

Represents the warm throughput (in read units per second and write units per second) for creating a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

### DynamodbTableContributorInsightsSpecification <a name="DynamodbTableContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableContributorInsightsSpecification {
	Enabled: interface{},
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.mode">Mode</a></code> | <code>*string</code> | Specifies the CloudWatch Contributor Insights mode for a table. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are `ACCESSED_AND_THROTTLED_KEYS` (tracks all access and throttled events) or `THROTTLED_KEYS` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

### DynamodbTableGlobalSecondaryIndexes <a name="DynamodbTableGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndexes {
	ContributorInsightsSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification,
	IndexName: *string,
	KeySchema: interface{},
	OnDemandThroughput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput,
	Projection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection,
	ProvisionedThroughput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput,
	WarmThroughput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.contributorInsightsSpecification">ContributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.indexName">IndexName</a></code> | <code>*string</code> | The name of the global secondary index. The name must be unique among all other indexes on this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.keySchema">KeySchema</a></code> | <code>interface{}</code> | The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | The maximum number of read and write units for the specified global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | Represents attributes that are copied (projected) from the table into the global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | Represents the provisioned throughput settings for the specified global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. |

---

##### `ContributorInsightsSpecification`<sup>Optional</sup> <a name="ContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.contributorInsightsSpecification"></a>

```go
ContributorInsightsSpecification DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

The name of the global secondary index. The name must be unique among all other indexes on this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#index_name DynamodbTable#index_name}

---

##### `KeySchema`<sup>Optional</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.keySchema"></a>

```go
KeySchema interface{}
```

- *Type:* interface{}

The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `OnDemandThroughput`<sup>Optional</sup> <a name="OnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.onDemandThroughput"></a>

```go
OnDemandThroughput DynamodbTableGlobalSecondaryIndexesOnDemandThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

The maximum number of read and write units for the specified global secondary index.

If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both. You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `Projection`<sup>Optional</sup> <a name="Projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.projection"></a>

```go
Projection DynamodbTableGlobalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

Represents attributes that are copied (projected) from the table into the global secondary index.

These are in addition to the primary key attributes and index key attributes, which are automatically projected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#projection DynamodbTable#projection}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.provisionedThroughput"></a>

```go
ProvisionedThroughput DynamodbTableGlobalSecondaryIndexesProvisionedThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

Represents the provisioned throughput settings for the specified global secondary index.

You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.
For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `WarmThroughput`<sup>Optional</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.warmThroughput"></a>

```go
WarmThroughput DynamodbTableGlobalSecondaryIndexesWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index.

If you use this parameter, you must specify `ReadUnitsPerSecond`, `WriteUnitsPerSecond`, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

### DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification <a name="DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification {
	Enabled: interface{},
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.mode">Mode</a></code> | <code>*string</code> | Specifies the CloudWatch Contributor Insights mode for a table. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are `ACCESSED_AND_THROTTLED_KEYS` (tracks all access and throttled events) or `THROTTLED_KEYS` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

### DynamodbTableGlobalSecondaryIndexesKeySchema <a name="DynamodbTableGlobalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndexesKeySchema {
	AttributeName: *string,
	KeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.attributeName">AttributeName</a></code> | <code>*string</code> | The name of a key attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.keyType">KeyType</a></code> | <code>*string</code> | The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

The name of a key attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_type DynamodbTable#key_type}

---

### DynamodbTableGlobalSecondaryIndexesOnDemandThroughput <a name="DynamodbTableGlobalSecondaryIndexesOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput {
	MaxReadRequestUnits: *f64,
	MaxWriteRequestUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | Maximum number of read request units for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | Maximum number of write request units for the specified table. |

---

##### `MaxReadRequestUnits`<sup>Optional</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxReadRequestUnits"></a>

```go
MaxReadRequestUnits *f64
```

- *Type:* *f64

Maximum number of read request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

##### `MaxWriteRequestUnits`<sup>Optional</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxWriteRequestUnits"></a>

```go
MaxWriteRequestUnits *f64
```

- *Type:* *f64

Maximum number of write request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

### DynamodbTableGlobalSecondaryIndexesProjection <a name="DynamodbTableGlobalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndexesProjection {
	NonKeyAttributes: *[]*string,
	ProjectionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | Represents the non-key attribute names which will be projected into the index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.projectionType">ProjectionType</a></code> | <code>*string</code> | The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index. |

---

##### `NonKeyAttributes`<sup>Optional</sup> <a name="NonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.nonKeyAttributes"></a>

```go
NonKeyAttributes *[]*string
```

- *Type:* *[]*string

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

##### `ProjectionType`<sup>Optional</sup> <a name="ProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.projectionType"></a>

```go
ProjectionType *string
```

- *Type:* *string

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

* `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
* `ALL` - All of the table attributes are projected into the index.

When using the DynamoDB console, `ALL` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

### DynamodbTableGlobalSecondaryIndexesProvisionedThroughput <a name="DynamodbTableGlobalSecondaryIndexesProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput {
	ReadCapacityUnits: *f64,
	WriteCapacityUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>*f64</code> | The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. |

---

##### `ReadCapacityUnits`<sup>Optional</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.readCapacityUnits"></a>

```go
ReadCapacityUnits *f64
```

- *Type:* *f64

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

##### `WriteCapacityUnits`<sup>Optional</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.writeCapacityUnits"></a>

```go
WriteCapacityUnits *f64
```

- *Type:* *f64

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

### DynamodbTableGlobalSecondaryIndexesWarmThroughput <a name="DynamodbTableGlobalSecondaryIndexesWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableGlobalSecondaryIndexesWarmThroughput {
	ReadUnitsPerSecond: *f64,
	WriteUnitsPerSecond: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>*f64</code> | Represents the number of read operations your base table can instantaneously support. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>*f64</code> | Represents the number of write operations your base table can instantaneously support. |

---

##### `ReadUnitsPerSecond`<sup>Optional</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.readUnitsPerSecond"></a>

```go
ReadUnitsPerSecond *f64
```

- *Type:* *f64

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

##### `WriteUnitsPerSecond`<sup>Optional</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.writeUnitsPerSecond"></a>

```go
WriteUnitsPerSecond *f64
```

- *Type:* *f64

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

### DynamodbTableImportSourceSpecification <a name="DynamodbTableImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableImportSourceSpecification {
	InputCompressionType: *string,
	InputFormat: *string,
	InputFormatOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions,
	S3BucketSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputCompressionType">InputCompressionType</a></code> | <code>*string</code> | Type of compression to be used on the input coming from the imported table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormat">InputFormat</a></code> | <code>*string</code> | The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormatOptions">InputFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | Additional properties that specify how the input is formatted,. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.s3BucketSource">S3BucketSource</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | The S3 bucket that provides the source for the import. |

---

##### `InputCompressionType`<sup>Optional</sup> <a name="InputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputCompressionType"></a>

```go
InputCompressionType *string
```

- *Type:* *string

Type of compression to be used on the input coming from the imported table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormat"></a>

```go
InputFormat *string
```

- *Type:* *string

The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}

---

##### `InputFormatOptions`<sup>Optional</sup> <a name="InputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormatOptions"></a>

```go
InputFormatOptions DynamodbTableImportSourceSpecificationInputFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

Additional properties that specify how the input is formatted,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}

---

##### `S3BucketSource`<sup>Optional</sup> <a name="S3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.s3BucketSource"></a>

```go
S3BucketSource DynamodbTableImportSourceSpecificationS3BucketSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

The S3 bucket that provides the source for the import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}

---

### DynamodbTableImportSourceSpecificationInputFormatOptions <a name="DynamodbTableImportSourceSpecificationInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableImportSourceSpecificationInputFormatOptions {
	Csv: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | The options for imported source files in CSV format. The values are Delimiter and HeaderList. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.property.csv"></a>

```go
Csv DynamodbTableImportSourceSpecificationInputFormatOptionsCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

The options for imported source files in CSV format. The values are Delimiter and HeaderList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}

---

### DynamodbTableImportSourceSpecificationInputFormatOptionsCsv <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv {
	Delimiter: *string,
	HeaderList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.delimiter">Delimiter</a></code> | <code>*string</code> | The delimiter used for separating items in the CSV file being imported. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.headerList">HeaderList</a></code> | <code>*[]*string</code> | List of the headers used to specify a common header for all source CSV files being imported. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

The delimiter used for separating items in the CSV file being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}

---

##### `HeaderList`<sup>Optional</sup> <a name="HeaderList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.headerList"></a>

```go
HeaderList *[]*string
```

- *Type:* *[]*string

List of the headers used to specify a common header for all source CSV files being imported.

If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}

---

### DynamodbTableImportSourceSpecificationS3BucketSource <a name="DynamodbTableImportSourceSpecificationS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableImportSourceSpecificationS3BucketSource {
	S3Bucket: *string,
	S3BucketOwner: *string,
	S3KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | The S3 bucket that is being imported from. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | The account number of the S3 bucket that is being imported from. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | The key prefix shared by all S3 Objects that are being imported. |

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

The S3 bucket that is being imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#s3_bucket DynamodbTable#s3_bucket}

---

##### `S3BucketOwner`<sup>Optional</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3BucketOwner"></a>

```go
S3BucketOwner *string
```

- *Type:* *string

The account number of the S3 bucket that is being imported from.

If the bucket is owned by the requester this is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#s3_bucket_owner DynamodbTable#s3_bucket_owner}

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

The key prefix shared by all S3 Objects that are being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#s3_key_prefix DynamodbTable#s3_key_prefix}

---

### DynamodbTableKinesisStreamSpecification <a name="DynamodbTableKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableKinesisStreamSpecification {
	ApproximateCreationDateTimePrecision: *string,
	StreamArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.approximateCreationDateTimePrecision">ApproximateCreationDateTimePrecision</a></code> | <code>*string</code> | The precision for the time and date that the stream was created. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.streamArn">StreamArn</a></code> | <code>*string</code> | The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024. |

---

##### `ApproximateCreationDateTimePrecision`<sup>Optional</sup> <a name="ApproximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.approximateCreationDateTimePrecision"></a>

```go
ApproximateCreationDateTimePrecision *string
```

- *Type:* *string

The precision for the time and date that the stream was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#approximate_creation_date_time_precision DynamodbTable#approximate_creation_date_time_precision}

---

##### `StreamArn`<sup>Optional</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.streamArn"></a>

```go
StreamArn *string
```

- *Type:* *string

The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#stream_arn DynamodbTable#stream_arn}

---

### DynamodbTableLocalSecondaryIndexes <a name="DynamodbTableLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableLocalSecondaryIndexes {
	IndexName: *string,
	KeySchema: interface{},
	Projection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.indexName">IndexName</a></code> | <code>*string</code> | The name of the local secondary index. The name must be unique among all other indexes on this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.keySchema">KeySchema</a></code> | <code>interface{}</code> | The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | Represents attributes that are copied (projected) from the table into the local secondary index. |

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

The name of the local secondary index. The name must be unique among all other indexes on this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#index_name DynamodbTable#index_name}

---

##### `KeySchema`<sup>Optional</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.keySchema"></a>

```go
KeySchema interface{}
```

- *Type:* interface{}

The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `Projection`<sup>Optional</sup> <a name="Projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.projection"></a>

```go
Projection DynamodbTableLocalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

Represents attributes that are copied (projected) from the table into the local secondary index.

These are in addition to the primary key attributes and index key attributes, which are automatically projected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#projection DynamodbTable#projection}

---

### DynamodbTableLocalSecondaryIndexesKeySchema <a name="DynamodbTableLocalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableLocalSecondaryIndexesKeySchema {
	AttributeName: *string,
	KeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.attributeName">AttributeName</a></code> | <code>*string</code> | The name of a key attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.keyType">KeyType</a></code> | <code>*string</code> | The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

The name of a key attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_type DynamodbTable#key_type}

---

### DynamodbTableLocalSecondaryIndexesProjection <a name="DynamodbTableLocalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableLocalSecondaryIndexesProjection {
	NonKeyAttributes: *[]*string,
	ProjectionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | Represents the non-key attribute names which will be projected into the index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.projectionType">ProjectionType</a></code> | <code>*string</code> | The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index. |

---

##### `NonKeyAttributes`<sup>Optional</sup> <a name="NonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.nonKeyAttributes"></a>

```go
NonKeyAttributes *[]*string
```

- *Type:* *[]*string

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

##### `ProjectionType`<sup>Optional</sup> <a name="ProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.projectionType"></a>

```go
ProjectionType *string
```

- *Type:* *string

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

* `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
* `ALL` - All of the table attributes are projected into the index.

When using the DynamoDB console, `ALL` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

### DynamodbTableOnDemandThroughput <a name="DynamodbTableOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableOnDemandThroughput {
	MaxReadRequestUnits: *f64,
	MaxWriteRequestUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | Maximum number of read request units for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | Maximum number of write request units for the specified table. |

---

##### `MaxReadRequestUnits`<sup>Optional</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits"></a>

```go
MaxReadRequestUnits *f64
```

- *Type:* *f64

Maximum number of read request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

##### `MaxWriteRequestUnits`<sup>Optional</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits"></a>

```go
MaxWriteRequestUnits *f64
```

- *Type:* *f64

Maximum number of write request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

### DynamodbTablePointInTimeRecoverySpecification <a name="DynamodbTablePointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTablePointInTimeRecoverySpecification {
	PointInTimeRecoveryEnabled: interface{},
	RecoveryPeriodInDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>interface{}</code> | Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.recoveryPeriodInDays">RecoveryPeriodInDays</a></code> | <code>*f64</code> | The number of preceding days for which continuous backups are taken and maintained. |

---

##### `PointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled"></a>

```go
PointInTimeRecoveryEnabled interface{}
```

- *Type:* interface{}

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#point_in_time_recovery_enabled DynamodbTable#point_in_time_recovery_enabled}

---

##### `RecoveryPeriodInDays`<sup>Optional</sup> <a name="RecoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.recoveryPeriodInDays"></a>

```go
RecoveryPeriodInDays *f64
```

- *Type:* *f64

The number of preceding days for which continuous backups are taken and maintained.

Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#recovery_period_in_days DynamodbTable#recovery_period_in_days}

---

### DynamodbTableProvisionedThroughput <a name="DynamodbTableProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableProvisionedThroughput {
	ReadCapacityUnits: *f64,
	WriteCapacityUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>*f64</code> | The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. |

---

##### `ReadCapacityUnits`<sup>Optional</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.readCapacityUnits"></a>

```go
ReadCapacityUnits *f64
```

- *Type:* *f64

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

##### `WriteCapacityUnits`<sup>Optional</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.writeCapacityUnits"></a>

```go
WriteCapacityUnits *f64
```

- *Type:* *f64

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

### DynamodbTableResourcePolicy <a name="DynamodbTableResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableResourcePolicy {
	PolicyDocument: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. |

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

### DynamodbTableSseSpecification <a name="DynamodbTableSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableSseSpecification {
	KmsMasterKeyId: *string,
	SseEnabled: interface{},
	SseType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | The KMS key that should be used for the KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseEnabled">SseEnabled</a></code> | <code>interface{}</code> | Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseType">SseType</a></code> | <code>*string</code> | Server-side encryption type. |

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.kmsMasterKeyId"></a>

```go
KmsMasterKeyId *string
```

- *Type:* *string

The KMS key that should be used for the KMS encryption.

To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#kms_master_key_id DynamodbTable#kms_master_key_id}

---

##### `SseEnabled`<sup>Optional</sup> <a name="SseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseEnabled"></a>

```go
SseEnabled interface{}
```

- *Type:* interface{}

Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key.

If enabled (true), server-side encryption type is set to `KMS` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#sse_enabled DynamodbTable#sse_enabled}

---

##### `SseType`<sup>Optional</sup> <a name="SseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseType"></a>

```go
SseType *string
```

- *Type:* *string

Server-side encryption type.

The only supported value is:

* `KMS` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#sse_type DynamodbTable#sse_type}

---

### DynamodbTableStreamSpecification <a name="DynamodbTableStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableStreamSpecification {
	ResourcePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy,
	StreamViewType: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.streamViewType">StreamViewType</a></code> | <code>*string</code> | When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}. |

---

##### `ResourcePolicy`<sup>Optional</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.resourcePolicy"></a>

```go
ResourcePolicy DynamodbTableStreamSpecificationResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams.

Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
When you remove the `StreamSpecification` property from the template, DynamoDB disables the stream but retains any attached resource policy until the stream is deleted after 24 hours. When you modify the `StreamViewType` property, DynamoDB creates a new stream and retains the old stream's resource policy. The old stream and its resource policy are deleted after the 24-hour retention period.
In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `StreamViewType`<sup>Optional</sup> <a name="StreamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.streamViewType"></a>

```go
StreamViewType *string
```

- *Type:* *string

When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table.

Valid values for `StreamViewType` are:

* `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
* `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
* `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
* `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}.

---

### DynamodbTableStreamSpecificationResourcePolicy <a name="DynamodbTableStreamSpecificationResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableStreamSpecificationResourcePolicy {
	PolicyDocument: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. |

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

### DynamodbTableStreamSpecificationTags <a name="DynamodbTableStreamSpecificationTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableStreamSpecificationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. Tag values are case-sensitive and can be null. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key DynamodbTable#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag. Tag values are case-sensitive and can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#value DynamodbTable#value}

---

### DynamodbTableTags <a name="DynamodbTableTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. Tag values are case-sensitive and can be null. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key DynamodbTable#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag. Tag values are case-sensitive and can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#value DynamodbTable#value}

---

### DynamodbTableTimeToLiveSpecification <a name="DynamodbTableTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableTimeToLiveSpecification {
	AttributeName: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.attributeName">AttributeName</a></code> | <code>*string</code> | The name of the TTL attribute used to store the expiration time for items in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether TTL is to be enabled (true) or disabled (false) on the table. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

The name of the TTL attribute used to store the expiration time for items in the table.

* The `AttributeName` property is required when enabling the TTL, or when TTL is already enabled.
* To update this property, you must first disable TTL and then enable TTL with the new attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether TTL is to be enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

### DynamodbTableWarmThroughput <a name="DynamodbTableWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

&dynamodbtable.DynamodbTableWarmThroughput {
	ReadUnitsPerSecond: *f64,
	WriteUnitsPerSecond: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>*f64</code> | Represents the number of read operations your base table can instantaneously support. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>*f64</code> | Represents the number of write operations your base table can instantaneously support. |

---

##### `ReadUnitsPerSecond`<sup>Optional</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.readUnitsPerSecond"></a>

```go
ReadUnitsPerSecond *f64
```

- *Type:* *f64

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

##### `WriteUnitsPerSecond`<sup>Optional</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.writeUnitsPerSecond"></a>

```go
WriteUnitsPerSecond *f64
```

- *Type:* *f64

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableAttributeDefinitionsList <a name="DynamodbTableAttributeDefinitionsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableAttributeDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableAttributeDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get"></a>

```go
func Get(index *f64) DynamodbTableAttributeDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableAttributeDefinitionsOutputReference <a name="DynamodbTableAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableAttributeDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableAttributeDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeType">ResetAttributeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetAttributeType` <a name="ResetAttributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeType"></a>

```go
func ResetAttributeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeTypeInput">AttributeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeType">AttributeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `AttributeTypeInput`<sup>Optional</sup> <a name="AttributeTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeTypeInput"></a>

```go
func AttributeTypeInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeType"></a>

```go
func AttributeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableContributorInsightsSpecificationOutputReference <a name="DynamodbTableContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableContributorInsightsSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableContributorInsightsSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference <a name="DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesKeySchemaList <a name="DynamodbTableGlobalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesKeySchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableGlobalSecondaryIndexesKeySchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get"></a>

```go
func Get(index *f64) DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference <a name="DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetKeyType"></a>

```go
func ResetKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesList <a name="DynamodbTableGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableGlobalSecondaryIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get"></a>

```go
func Get(index *f64) DynamodbTableGlobalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxReadRequestUnits">ResetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">ResetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReadRequestUnits` <a name="ResetMaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```go
func ResetMaxReadRequestUnits()
```

##### `ResetMaxWriteRequestUnits` <a name="ResetMaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```go
func ResetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">MaxReadRequestUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">MaxWriteRequestUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnitsInput`<sup>Optional</sup> <a name="MaxReadRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```go
func MaxReadRequestUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnitsInput`<sup>Optional</sup> <a name="MaxWriteRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```go
func MaxWriteRequestUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```go
func MaxWriteRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesOutputReference <a name="DynamodbTableGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableGlobalSecondaryIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification">PutContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema">PutKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput">PutOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection">PutProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput">PutProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput">PutWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetContributorInsightsSpecification">ResetContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetKeySchema">ResetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetOnDemandThroughput">ResetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProjection">ResetProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetWarmThroughput">ResetWarmThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContributorInsightsSpecification` <a name="PutContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification"></a>

```go
func PutContributorInsightsSpecification(value DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---

##### `PutKeySchema` <a name="PutKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema"></a>

```go
func PutKeySchema(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnDemandThroughput` <a name="PutOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput"></a>

```go
func PutOnDemandThroughput(value DynamodbTableGlobalSecondaryIndexesOnDemandThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---

##### `PutProjection` <a name="PutProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection"></a>

```go
func PutProjection(value DynamodbTableGlobalSecondaryIndexesProjection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---

##### `PutProvisionedThroughput` <a name="PutProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput"></a>

```go
func PutProvisionedThroughput(value DynamodbTableGlobalSecondaryIndexesProvisionedThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---

##### `PutWarmThroughput` <a name="PutWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput"></a>

```go
func PutWarmThroughput(value DynamodbTableGlobalSecondaryIndexesWarmThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---

##### `ResetContributorInsightsSpecification` <a name="ResetContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetContributorInsightsSpecification"></a>

```go
func ResetContributorInsightsSpecification()
```

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetIndexName"></a>

```go
func ResetIndexName()
```

##### `ResetKeySchema` <a name="ResetKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetKeySchema"></a>

```go
func ResetKeySchema()
```

##### `ResetOnDemandThroughput` <a name="ResetOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetOnDemandThroughput"></a>

```go
func ResetOnDemandThroughput()
```

##### `ResetProjection` <a name="ResetProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProjection"></a>

```go
func ResetProjection()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProvisionedThroughput"></a>

```go
func ResetProvisionedThroughput()
```

##### `ResetWarmThroughput` <a name="ResetWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetWarmThroughput"></a>

```go
func ResetWarmThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification">ContributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList">DynamodbTableGlobalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecificationInput">ContributorInsightsSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchemaInput">KeySchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughputInput">OnDemandThroughputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projectionInput">ProjectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughputInput">WarmThroughputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContributorInsightsSpecification`<sup>Required</sup> <a name="ContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification"></a>

```go
func ContributorInsightsSpecification() DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a>

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema"></a>

```go
func KeySchema() DynamodbTableGlobalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList">DynamodbTableGlobalSecondaryIndexesKeySchemaList</a>

---

##### `OnDemandThroughput`<sup>Required</sup> <a name="OnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput"></a>

```go
func OnDemandThroughput() DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a>

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projection"></a>

```go
func Projection() DynamodbTableGlobalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a>

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a>

---

##### `WarmThroughput`<sup>Required</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput"></a>

```go
func WarmThroughput() DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a>

---

##### `ContributorInsightsSpecificationInput`<sup>Optional</sup> <a name="ContributorInsightsSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecificationInput"></a>

```go
func ContributorInsightsSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `KeySchemaInput`<sup>Optional</sup> <a name="KeySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchemaInput"></a>

```go
func KeySchemaInput() interface{}
```

- *Type:* interface{}

---

##### `OnDemandThroughputInput`<sup>Optional</sup> <a name="OnDemandThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughputInput"></a>

```go
func OnDemandThroughputInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectionInput`<sup>Optional</sup> <a name="ProjectionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projectionInput"></a>

```go
func ProjectionInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughputInput"></a>

```go
func ProvisionedThroughputInput() interface{}
```

- *Type:* interface{}

---

##### `WarmThroughputInput`<sup>Optional</sup> <a name="WarmThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughputInput"></a>

```go
func WarmThroughputInput() interface{}
```

- *Type:* interface{}

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesProjectionOutputReference <a name="DynamodbTableGlobalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesProjectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableGlobalSecondaryIndexesProjectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes">ResetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetProjectionType">ResetProjectionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNonKeyAttributes` <a name="ResetNonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes"></a>

```go
func ResetNonKeyAttributes()
```

##### `ResetProjectionType` <a name="ResetProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetProjectionType"></a>

```go
func ResetProjectionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput">NonKeyAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput">ProjectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType">ProjectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonKeyAttributesInput`<sup>Optional</sup> <a name="NonKeyAttributesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput"></a>

```go
func NonKeyAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionTypeInput`<sup>Optional</sup> <a name="ProjectionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput"></a>

```go
func ProjectionTypeInput() *string
```

- *Type:* *string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```go
func NonKeyAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```go
func ProjectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetReadCapacityUnits">ResetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetWriteCapacityUnits">ResetWriteCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadCapacityUnits` <a name="ResetReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```go
func ResetReadCapacityUnits()
```

##### `ResetWriteCapacityUnits` <a name="ResetWriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```go
func ResetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnitsInput">ReadCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">WriteCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityUnitsInput`<sup>Optional</sup> <a name="ReadCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```go
func ReadCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `WriteCapacityUnitsInput`<sup>Optional</sup> <a name="WriteCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```go
func WriteCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `WriteCapacityUnits`<sup>Required</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```go
func WriteCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetReadUnitsPerSecond">ResetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetWriteUnitsPerSecond">ResetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadUnitsPerSecond` <a name="ResetReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```go
func ResetReadUnitsPerSecond()
```

##### `ResetWriteUnitsPerSecond` <a name="ResetWriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```go
func ResetWriteUnitsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecondInput">ReadUnitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecondInput">WriteUnitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadUnitsPerSecondInput`<sup>Optional</sup> <a name="ReadUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```go
func ReadUnitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `WriteUnitsPerSecondInput`<sup>Optional</sup> <a name="WriteUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```go
func WriteUnitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `ReadUnitsPerSecond`<sup>Required</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```go
func ReadUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `WriteUnitsPerSecond`<sup>Required</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```go
func WriteUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetHeaderList">ResetHeaderList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetHeaderList` <a name="ResetHeaderList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetHeaderList"></a>

```go
func ResetHeaderList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerListInput">HeaderListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList">HeaderList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `HeaderListInput`<sup>Optional</sup> <a name="HeaderListInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerListInput"></a>

```go
func HeaderListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `HeaderList`<sup>Required</sup> <a name="HeaderList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList"></a>

```go
func HeaderList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv"></a>

```go
func PutCsv(value DynamodbTableImportSourceSpecificationInputFormatOptionsCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resetCsv"></a>

```go
func ResetCsv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csvInput">CsvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv"></a>

```go
func Csv() DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csvInput"></a>

```go
func CsvInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableImportSourceSpecificationOutputReference <a name="DynamodbTableImportSourceSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableImportSourceSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableImportSourceSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions">PutInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource">PutS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputCompressionType">ResetInputCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormatOptions">ResetInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetS3BucketSource">ResetS3BucketSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputFormatOptions` <a name="PutInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions"></a>

```go
func PutInputFormatOptions(value DynamodbTableImportSourceSpecificationInputFormatOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---

##### `PutS3BucketSource` <a name="PutS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource"></a>

```go
func PutS3BucketSource(value DynamodbTableImportSourceSpecificationS3BucketSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---

##### `ResetInputCompressionType` <a name="ResetInputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputCompressionType"></a>

```go
func ResetInputCompressionType()
```

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormat"></a>

```go
func ResetInputFormat()
```

##### `ResetInputFormatOptions` <a name="ResetInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormatOptions"></a>

```go
func ResetInputFormatOptions()
```

##### `ResetS3BucketSource` <a name="ResetS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetS3BucketSource"></a>

```go
func ResetS3BucketSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions">InputFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource">S3BucketSource</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionTypeInput">InputCompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptionsInput">InputFormatOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSourceInput">S3BucketSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType">InputCompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputFormatOptions`<sup>Required</sup> <a name="InputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions"></a>

```go
func InputFormatOptions() DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a>

---

##### `S3BucketSource`<sup>Required</sup> <a name="S3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource"></a>

```go
func S3BucketSource() DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a>

---

##### `InputCompressionTypeInput`<sup>Optional</sup> <a name="InputCompressionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionTypeInput"></a>

```go
func InputCompressionTypeInput() *string
```

- *Type:* *string

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatInput"></a>

```go
func InputFormatInput() *string
```

- *Type:* *string

---

##### `InputFormatOptionsInput`<sup>Optional</sup> <a name="InputFormatOptionsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptionsInput"></a>

```go
func InputFormatOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `S3BucketSourceInput`<sup>Optional</sup> <a name="S3BucketSourceInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSourceInput"></a>

```go
func S3BucketSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InputCompressionType`<sup>Required</sup> <a name="InputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType"></a>

```go
func InputCompressionType() *string
```

- *Type:* *string

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference <a name="DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3BucketOwner">ResetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```

##### `ResetS3BucketOwner` <a name="ResetS3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3BucketOwner"></a>

```go
func ResetS3BucketOwner()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwnerInput"></a>

```go
func S3BucketOwnerInput() *string
```

- *Type:* *string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner"></a>

```go
func S3BucketOwner() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableKinesisStreamSpecificationOutputReference <a name="DynamodbTableKinesisStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableKinesisStreamSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableKinesisStreamSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetApproximateCreationDateTimePrecision">ResetApproximateCreationDateTimePrecision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetStreamArn">ResetStreamArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApproximateCreationDateTimePrecision` <a name="ResetApproximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetApproximateCreationDateTimePrecision"></a>

```go
func ResetApproximateCreationDateTimePrecision()
```

##### `ResetStreamArn` <a name="ResetStreamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetStreamArn"></a>

```go
func ResetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecisionInput">ApproximateCreationDateTimePrecisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision">ApproximateCreationDateTimePrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateCreationDateTimePrecisionInput`<sup>Optional</sup> <a name="ApproximateCreationDateTimePrecisionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecisionInput"></a>

```go
func ApproximateCreationDateTimePrecisionInput() *string
```

- *Type:* *string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArnInput"></a>

```go
func StreamArnInput() *string
```

- *Type:* *string

---

##### `ApproximateCreationDateTimePrecision`<sup>Required</sup> <a name="ApproximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision"></a>

```go
func ApproximateCreationDateTimePrecision() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableLocalSecondaryIndexesKeySchemaList <a name="DynamodbTableLocalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableLocalSecondaryIndexesKeySchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableLocalSecondaryIndexesKeySchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get"></a>

```go
func Get(index *f64) DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference <a name="DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetKeyType"></a>

```go
func ResetKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableLocalSecondaryIndexesList <a name="DynamodbTableLocalSecondaryIndexesList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableLocalSecondaryIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableLocalSecondaryIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get"></a>

```go
func Get(index *f64) DynamodbTableLocalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableLocalSecondaryIndexesOutputReference <a name="DynamodbTableLocalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableLocalSecondaryIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableLocalSecondaryIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema">PutKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection">PutProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetKeySchema">ResetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetProjection">ResetProjection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeySchema` <a name="PutKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema"></a>

```go
func PutKeySchema(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProjection` <a name="PutProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection"></a>

```go
func PutProjection(value DynamodbTableLocalSecondaryIndexesProjection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetIndexName"></a>

```go
func ResetIndexName()
```

##### `ResetKeySchema` <a name="ResetKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetKeySchema"></a>

```go
func ResetKeySchema()
```

##### `ResetProjection` <a name="ResetProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetProjection"></a>

```go
func ResetProjection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList">DynamodbTableLocalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference">DynamodbTableLocalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchemaInput">KeySchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projectionInput">ProjectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema"></a>

```go
func KeySchema() DynamodbTableLocalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList">DynamodbTableLocalSecondaryIndexesKeySchemaList</a>

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projection"></a>

```go
func Projection() DynamodbTableLocalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference">DynamodbTableLocalSecondaryIndexesProjectionOutputReference</a>

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `KeySchemaInput`<sup>Optional</sup> <a name="KeySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchemaInput"></a>

```go
func KeySchemaInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectionInput`<sup>Optional</sup> <a name="ProjectionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projectionInput"></a>

```go
func ProjectionInput() interface{}
```

- *Type:* interface{}

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableLocalSecondaryIndexesProjectionOutputReference <a name="DynamodbTableLocalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableLocalSecondaryIndexesProjectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableLocalSecondaryIndexesProjectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes">ResetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetProjectionType">ResetProjectionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNonKeyAttributes` <a name="ResetNonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes"></a>

```go
func ResetNonKeyAttributes()
```

##### `ResetProjectionType` <a name="ResetProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetProjectionType"></a>

```go
func ResetProjectionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput">NonKeyAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput">ProjectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType">ProjectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonKeyAttributesInput`<sup>Optional</sup> <a name="NonKeyAttributesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput"></a>

```go
func NonKeyAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionTypeInput`<sup>Optional</sup> <a name="ProjectionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput"></a>

```go
func ProjectionTypeInput() *string
```

- *Type:* *string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```go
func NonKeyAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```go
func ProjectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableOnDemandThroughputOutputReference <a name="DynamodbTableOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableOnDemandThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableOnDemandThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits">ResetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">ResetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReadRequestUnits` <a name="ResetMaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```go
func ResetMaxReadRequestUnits()
```

##### `ResetMaxWriteRequestUnits` <a name="ResetMaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```go
func ResetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">MaxReadRequestUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">MaxWriteRequestUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnitsInput`<sup>Optional</sup> <a name="MaxReadRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```go
func MaxReadRequestUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnitsInput`<sup>Optional</sup> <a name="MaxWriteRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```go
func MaxWriteRequestUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```go
func MaxWriteRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTablePointInTimeRecoverySpecificationOutputReference <a name="DynamodbTablePointInTimeRecoverySpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTablePointInTimeRecoverySpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTablePointInTimeRecoverySpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetPointInTimeRecoveryEnabled">ResetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetRecoveryPeriodInDays">ResetRecoveryPeriodInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPointInTimeRecoveryEnabled` <a name="ResetPointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```go
func ResetPointInTimeRecoveryEnabled()
```

##### `ResetRecoveryPeriodInDays` <a name="ResetRecoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetRecoveryPeriodInDays"></a>

```go
func ResetRecoveryPeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabledInput">PointInTimeRecoveryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDaysInput">RecoveryPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays">RecoveryPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="PointInTimeRecoveryEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```go
func PointInTimeRecoveryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RecoveryPeriodInDaysInput`<sup>Optional</sup> <a name="RecoveryPeriodInDaysInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDaysInput"></a>

```go
func RecoveryPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `PointInTimeRecoveryEnabled`<sup>Required</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```go
func PointInTimeRecoveryEnabled() interface{}
```

- *Type:* interface{}

---

##### `RecoveryPeriodInDays`<sup>Required</sup> <a name="RecoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays"></a>

```go
func RecoveryPeriodInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableProvisionedThroughputOutputReference <a name="DynamodbTableProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableProvisionedThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableProvisionedThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetReadCapacityUnits">ResetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetWriteCapacityUnits">ResetWriteCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadCapacityUnits` <a name="ResetReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```go
func ResetReadCapacityUnits()
```

##### `ResetWriteCapacityUnits` <a name="ResetWriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```go
func ResetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnitsInput">ReadCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">WriteCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityUnitsInput`<sup>Optional</sup> <a name="ReadCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```go
func ReadCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `WriteCapacityUnitsInput`<sup>Optional</sup> <a name="WriteCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```go
func WriteCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `WriteCapacityUnits`<sup>Required</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```go
func WriteCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableResourcePolicyOutputReference <a name="DynamodbTableResourcePolicyOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resetPolicyDocument"></a>

```go
func ResetPolicyDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableSseSpecificationOutputReference <a name="DynamodbTableSseSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseEnabled">ResetSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseType">ResetSseType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetKmsMasterKeyId"></a>

```go
func ResetKmsMasterKeyId()
```

##### `ResetSseEnabled` <a name="ResetSseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseEnabled"></a>

```go
func ResetSseEnabled()
```

##### `ResetSseType` <a name="ResetSseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseType"></a>

```go
func ResetSseType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabledInput">SseEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseTypeInput">SseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabled">SseEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseType">SseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyIdInput"></a>

```go
func KmsMasterKeyIdInput() *string
```

- *Type:* *string

---

##### `SseEnabledInput`<sup>Optional</sup> <a name="SseEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabledInput"></a>

```go
func SseEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SseTypeInput`<sup>Optional</sup> <a name="SseTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseTypeInput"></a>

```go
func SseTypeInput() *string
```

- *Type:* *string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId"></a>

```go
func KmsMasterKeyId() *string
```

- *Type:* *string

---

##### `SseEnabled`<sup>Required</sup> <a name="SseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabled"></a>

```go
func SseEnabled() interface{}
```

- *Type:* interface{}

---

##### `SseType`<sup>Required</sup> <a name="SseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseType"></a>

```go
func SseType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableStreamSpecificationOutputReference <a name="DynamodbTableStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableStreamSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableStreamSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy">PutResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetResourcePolicy">ResetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetStreamViewType">ResetStreamViewType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourcePolicy` <a name="PutResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy"></a>

```go
func PutResourcePolicy(value DynamodbTableStreamSpecificationResourcePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetResourcePolicy` <a name="ResetResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetResourcePolicy"></a>

```go
func ResetResourcePolicy()
```

##### `ResetStreamViewType` <a name="ResetStreamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetStreamViewType"></a>

```go
func ResetStreamViewType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference">DynamodbTableStreamSpecificationResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList">DynamodbTableStreamSpecificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicyInput">ResourcePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewTypeInput">StreamViewTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewType">StreamViewType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicy"></a>

```go
func ResourcePolicy() DynamodbTableStreamSpecificationResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference">DynamodbTableStreamSpecificationResourcePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.tags"></a>

```go
func Tags() DynamodbTableStreamSpecificationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList">DynamodbTableStreamSpecificationTagsList</a>

---

##### `ResourcePolicyInput`<sup>Optional</sup> <a name="ResourcePolicyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicyInput"></a>

```go
func ResourcePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `StreamViewTypeInput`<sup>Optional</sup> <a name="StreamViewTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewTypeInput"></a>

```go
func StreamViewTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `StreamViewType`<sup>Required</sup> <a name="StreamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewType"></a>

```go
func StreamViewType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableStreamSpecificationResourcePolicyOutputReference <a name="DynamodbTableStreamSpecificationResourcePolicyOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableStreamSpecificationResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableStreamSpecificationResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resetPolicyDocument"></a>

```go
func ResetPolicyDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableStreamSpecificationTagsList <a name="DynamodbTableStreamSpecificationTagsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableStreamSpecificationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableStreamSpecificationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.get"></a>

```go
func Get(index *f64) DynamodbTableStreamSpecificationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableStreamSpecificationTagsOutputReference <a name="DynamodbTableStreamSpecificationTagsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableStreamSpecificationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableStreamSpecificationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableTagsList <a name="DynamodbTableTagsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamodbTableTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get"></a>

```go
func Get(index *f64) DynamodbTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableTagsOutputReference <a name="DynamodbTableTagsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamodbTableTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableTimeToLiveSpecificationOutputReference <a name="DynamodbTableTimeToLiveSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableTimeToLiveSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableTimeToLiveSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamodbTableWarmThroughputOutputReference <a name="DynamodbTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dynamodbtable"

dynamodbtable.NewDynamodbTableWarmThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableWarmThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetReadUnitsPerSecond">ResetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetWriteUnitsPerSecond">ResetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadUnitsPerSecond` <a name="ResetReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```go
func ResetReadUnitsPerSecond()
```

##### `ResetWriteUnitsPerSecond` <a name="ResetWriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```go
func ResetWriteUnitsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecondInput">ReadUnitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput">WriteUnitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadUnitsPerSecondInput`<sup>Optional</sup> <a name="ReadUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```go
func ReadUnitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `WriteUnitsPerSecondInput`<sup>Optional</sup> <a name="WriteUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```go
func WriteUnitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `ReadUnitsPerSecond`<sup>Required</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```go
func ReadUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `WriteUnitsPerSecond`<sup>Required</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```go
func WriteUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



