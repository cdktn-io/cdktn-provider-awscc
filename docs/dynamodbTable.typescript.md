# `dynamodbTable` Submodule <a name="`dynamodbTable` Submodule" id="@cdktn/provider-awscc.dynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTable <a name="DynamodbTable" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table awscc_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTable(scope: Construct, id: string, config: DynamodbTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig">DynamodbTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig">DynamodbTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions">putAttributeDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification">putContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes">putGlobalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification">putImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification">putKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes">putLocalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput">putOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification">putPointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput">putProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy">putResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification">putSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification">putStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification">putTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput">putWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetAttributeDefinitions">resetAttributeDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetBillingMode">resetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetContributorInsightsSpecification">resetContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndexes">resetGlobalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetImportSourceSpecification">resetImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetKinesisStreamSpecification">resetKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetLocalSecondaryIndexes">resetLocalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOnDemandThroughput">resetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetPointInTimeRecoverySpecification">resetPointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetResourcePolicy">resetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetSseSpecification">resetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetStreamSpecification">resetStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableClass">resetTableClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTimeToLiveSpecification">resetTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetWarmThroughput">resetWarmThroughput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributeDefinitions` <a name="putAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions"></a>

```typescript
public putAttributeDefinitions(value: IResolvable | DynamodbTableAttributeDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>[]

---

##### `putContributorInsightsSpecification` <a name="putContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification"></a>

```typescript
public putContributorInsightsSpecification(value: DynamodbTableContributorInsightsSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---

##### `putGlobalSecondaryIndexes` <a name="putGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes"></a>

```typescript
public putGlobalSecondaryIndexes(value: IResolvable | DynamodbTableGlobalSecondaryIndexes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>[]

---

##### `putImportSourceSpecification` <a name="putImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification"></a>

```typescript
public putImportSourceSpecification(value: DynamodbTableImportSourceSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---

##### `putKinesisStreamSpecification` <a name="putKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification"></a>

```typescript
public putKinesisStreamSpecification(value: DynamodbTableKinesisStreamSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---

##### `putLocalSecondaryIndexes` <a name="putLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes"></a>

```typescript
public putLocalSecondaryIndexes(value: IResolvable | DynamodbTableLocalSecondaryIndexes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>[]

---

##### `putOnDemandThroughput` <a name="putOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput"></a>

```typescript
public putOnDemandThroughput(value: DynamodbTableOnDemandThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `putPointInTimeRecoverySpecification` <a name="putPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification"></a>

```typescript
public putPointInTimeRecoverySpecification(value: DynamodbTablePointInTimeRecoverySpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---

##### `putProvisionedThroughput` <a name="putProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput"></a>

```typescript
public putProvisionedThroughput(value: DynamodbTableProvisionedThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---

##### `putResourcePolicy` <a name="putResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy"></a>

```typescript
public putResourcePolicy(value: DynamodbTableResourcePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---

##### `putSseSpecification` <a name="putSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification"></a>

```typescript
public putSseSpecification(value: DynamodbTableSseSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---

##### `putStreamSpecification` <a name="putStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification"></a>

```typescript
public putStreamSpecification(value: DynamodbTableStreamSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags"></a>

```typescript
public putTags(value: IResolvable | DynamodbTableTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>[]

---

##### `putTimeToLiveSpecification` <a name="putTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification"></a>

```typescript
public putTimeToLiveSpecification(value: DynamodbTableTimeToLiveSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---

##### `putWarmThroughput` <a name="putWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput"></a>

```typescript
public putWarmThroughput(value: DynamodbTableWarmThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---

##### `resetAttributeDefinitions` <a name="resetAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetAttributeDefinitions"></a>

```typescript
public resetAttributeDefinitions(): void
```

##### `resetBillingMode` <a name="resetBillingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetBillingMode"></a>

```typescript
public resetBillingMode(): void
```

##### `resetContributorInsightsSpecification` <a name="resetContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetContributorInsightsSpecification"></a>

```typescript
public resetContributorInsightsSpecification(): void
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetGlobalSecondaryIndexes` <a name="resetGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndexes"></a>

```typescript
public resetGlobalSecondaryIndexes(): void
```

##### `resetImportSourceSpecification` <a name="resetImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetImportSourceSpecification"></a>

```typescript
public resetImportSourceSpecification(): void
```

##### `resetKinesisStreamSpecification` <a name="resetKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetKinesisStreamSpecification"></a>

```typescript
public resetKinesisStreamSpecification(): void
```

##### `resetLocalSecondaryIndexes` <a name="resetLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetLocalSecondaryIndexes"></a>

```typescript
public resetLocalSecondaryIndexes(): void
```

##### `resetOnDemandThroughput` <a name="resetOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOnDemandThroughput"></a>

```typescript
public resetOnDemandThroughput(): void
```

##### `resetPointInTimeRecoverySpecification` <a name="resetPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetPointInTimeRecoverySpecification"></a>

```typescript
public resetPointInTimeRecoverySpecification(): void
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetProvisionedThroughput"></a>

```typescript
public resetProvisionedThroughput(): void
```

##### `resetResourcePolicy` <a name="resetResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetResourcePolicy"></a>

```typescript
public resetResourcePolicy(): void
```

##### `resetSseSpecification` <a name="resetSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetSseSpecification"></a>

```typescript
public resetSseSpecification(): void
```

##### `resetStreamSpecification` <a name="resetStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetStreamSpecification"></a>

```typescript
public resetStreamSpecification(): void
```

##### `resetTableClass` <a name="resetTableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableClass"></a>

```typescript
public resetTableClass(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeToLiveSpecification` <a name="resetTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTimeToLiveSpecification"></a>

```typescript
public resetTimeToLiveSpecification(): void
```

##### `resetWarmThroughput` <a name="resetWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetWarmThroughput"></a>

```typescript
public resetWarmThroughput(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DynamodbTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

dynamodbTable.DynamodbTable.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

dynamodbTable.DynamodbTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

dynamodbTable.DynamodbTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

dynamodbTable.DynamodbTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DynamodbTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamodbTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamodbTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DynamodbTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitions">attributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList">DynamodbTableAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference">DynamodbTableContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList">DynamodbTableGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecification">importSourceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference">DynamodbTableImportSourceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecification">kinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference">DynamodbTableKinesisStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexes">localSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList">DynamodbTableLocalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecification">pointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference">DynamodbTablePointInTimeRecoverySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference">DynamodbTableProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference">DynamodbTableResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference">DynamodbTableSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecification">streamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference">DynamodbTableStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList">DynamodbTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecification">timeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference">DynamodbTableTimeToLiveSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference">DynamodbTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitionsInput">attributeDefinitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingModeInput">billingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecificationInput">contributorInsightsSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexesInput">globalSecondaryIndexesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecificationInput">importSourceSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchemaInput">keySchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecificationInput">kinesisStreamSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexesInput">localSecondaryIndexesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughputInput">onDemandThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecificationInput">pointInTimeRecoverySpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicyInput">resourcePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecificationInput">sseSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecificationInput">streamSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClassInput">tableClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecificationInput">timeToLiveSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughputInput">warmThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingMode">billingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchema">keySchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClass">tableClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attributeDefinitions`<sup>Required</sup> <a name="attributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitions"></a>

```typescript
public readonly attributeDefinitions: DynamodbTableAttributeDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList">DynamodbTableAttributeDefinitionsList</a>

---

##### `contributorInsightsSpecification`<sup>Required</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecification"></a>

```typescript
public readonly contributorInsightsSpecification: DynamodbTableContributorInsightsSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference">DynamodbTableContributorInsightsSpecificationOutputReference</a>

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="globalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexes"></a>

```typescript
public readonly globalSecondaryIndexes: DynamodbTableGlobalSecondaryIndexesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList">DynamodbTableGlobalSecondaryIndexesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importSourceSpecification`<sup>Required</sup> <a name="importSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecification"></a>

```typescript
public readonly importSourceSpecification: DynamodbTableImportSourceSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference">DynamodbTableImportSourceSpecificationOutputReference</a>

---

##### `kinesisStreamSpecification`<sup>Required</sup> <a name="kinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecification"></a>

```typescript
public readonly kinesisStreamSpecification: DynamodbTableKinesisStreamSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference">DynamodbTableKinesisStreamSpecificationOutputReference</a>

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="localSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexes"></a>

```typescript
public readonly localSecondaryIndexes: DynamodbTableLocalSecondaryIndexesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList">DynamodbTableLocalSecondaryIndexesList</a>

---

##### `onDemandThroughput`<sup>Required</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughput"></a>

```typescript
public readonly onDemandThroughput: DynamodbTableOnDemandThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a>

---

##### `pointInTimeRecoverySpecification`<sup>Required</sup> <a name="pointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecification"></a>

```typescript
public readonly pointInTimeRecoverySpecification: DynamodbTablePointInTimeRecoverySpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference">DynamodbTablePointInTimeRecoverySpecificationOutputReference</a>

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: DynamodbTableProvisionedThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference">DynamodbTableProvisionedThroughputOutputReference</a>

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: DynamodbTableResourcePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference">DynamodbTableResourcePolicyOutputReference</a>

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: DynamodbTableSseSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference">DynamodbTableSseSpecificationOutputReference</a>

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `streamSpecification`<sup>Required</sup> <a name="streamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecification"></a>

```typescript
public readonly streamSpecification: DynamodbTableStreamSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference">DynamodbTableStreamSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tags"></a>

```typescript
public readonly tags: DynamodbTableTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList">DynamodbTableTagsList</a>

---

##### `timeToLiveSpecification`<sup>Required</sup> <a name="timeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecification"></a>

```typescript
public readonly timeToLiveSpecification: DynamodbTableTimeToLiveSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference">DynamodbTableTimeToLiveSpecificationOutputReference</a>

---

##### `warmThroughput`<sup>Required</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: DynamodbTableWarmThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference">DynamodbTableWarmThroughputOutputReference</a>

---

##### `attributeDefinitionsInput`<sup>Optional</sup> <a name="attributeDefinitionsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitionsInput"></a>

```typescript
public readonly attributeDefinitionsInput: IResolvable | DynamodbTableAttributeDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>[]

---

##### `billingModeInput`<sup>Optional</sup> <a name="billingModeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingModeInput"></a>

```typescript
public readonly billingModeInput: string;
```

- *Type:* string

---

##### `contributorInsightsSpecificationInput`<sup>Optional</sup> <a name="contributorInsightsSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecificationInput"></a>

```typescript
public readonly contributorInsightsSpecificationInput: IResolvable | DynamodbTableContributorInsightsSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `globalSecondaryIndexesInput`<sup>Optional</sup> <a name="globalSecondaryIndexesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexesInput"></a>

```typescript
public readonly globalSecondaryIndexesInput: IResolvable | DynamodbTableGlobalSecondaryIndexes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>[]

---

##### `importSourceSpecificationInput`<sup>Optional</sup> <a name="importSourceSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecificationInput"></a>

```typescript
public readonly importSourceSpecificationInput: IResolvable | DynamodbTableImportSourceSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchemaInput"></a>

```typescript
public readonly keySchemaInput: string;
```

- *Type:* string

---

##### `kinesisStreamSpecificationInput`<sup>Optional</sup> <a name="kinesisStreamSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecificationInput"></a>

```typescript
public readonly kinesisStreamSpecificationInput: IResolvable | DynamodbTableKinesisStreamSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---

##### `localSecondaryIndexesInput`<sup>Optional</sup> <a name="localSecondaryIndexesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexesInput"></a>

```typescript
public readonly localSecondaryIndexesInput: IResolvable | DynamodbTableLocalSecondaryIndexes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>[]

---

##### `onDemandThroughputInput`<sup>Optional</sup> <a name="onDemandThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughputInput"></a>

```typescript
public readonly onDemandThroughputInput: IResolvable | DynamodbTableOnDemandThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `pointInTimeRecoverySpecificationInput`<sup>Optional</sup> <a name="pointInTimeRecoverySpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecificationInput"></a>

```typescript
public readonly pointInTimeRecoverySpecificationInput: IResolvable | DynamodbTablePointInTimeRecoverySpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughputInput"></a>

```typescript
public readonly provisionedThroughputInput: IResolvable | DynamodbTableProvisionedThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---

##### `resourcePolicyInput`<sup>Optional</sup> <a name="resourcePolicyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicyInput"></a>

```typescript
public readonly resourcePolicyInput: IResolvable | DynamodbTableResourcePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---

##### `sseSpecificationInput`<sup>Optional</sup> <a name="sseSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecificationInput"></a>

```typescript
public readonly sseSpecificationInput: IResolvable | DynamodbTableSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---

##### `streamSpecificationInput`<sup>Optional</sup> <a name="streamSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecificationInput"></a>

```typescript
public readonly streamSpecificationInput: IResolvable | DynamodbTableStreamSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---

##### `tableClassInput`<sup>Optional</sup> <a name="tableClassInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClassInput"></a>

```typescript
public readonly tableClassInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DynamodbTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>[]

---

##### `timeToLiveSpecificationInput`<sup>Optional</sup> <a name="timeToLiveSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecificationInput"></a>

```typescript
public readonly timeToLiveSpecificationInput: IResolvable | DynamodbTableTimeToLiveSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---

##### `warmThroughputInput`<sup>Optional</sup> <a name="warmThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughputInput"></a>

```typescript
public readonly warmThroughputInput: IResolvable | DynamodbTableWarmThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingMode"></a>

```typescript
public readonly billingMode: string;
```

- *Type:* string

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchema"></a>

```typescript
public readonly keySchema: string;
```

- *Type:* string

---

##### `tableClass`<sup>Required</sup> <a name="tableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClass"></a>

```typescript
public readonly tableClass: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableAttributeDefinitions <a name="DynamodbTableAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableAttributeDefinitions: dynamodbTable.DynamodbTableAttributeDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeName">attributeName</a></code> | <code>string</code> | A name for the attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeType">attributeType</a></code> | <code>string</code> | The data type for the attribute, where:   +  ``S`` - the attribute is of type String   +  ``N`` - the attribute is of type Number   +  ``B`` - the attribute is of type Binary. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

A name for the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `attributeType`<sup>Optional</sup> <a name="attributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

The data type for the attribute, where:   +  ``S`` - the attribute is of type String   +  ``N`` - the attribute is of type Number   +  ``B`` - the attribute is of type Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#attribute_type DynamodbTable#attribute_type}

---

### DynamodbTableConfig <a name="DynamodbTableConfig" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableConfig: dynamodbTable.DynamodbTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.keySchema">keySchema</a></code> | <code>string</code> | Specifies the attributes that make up the primary key for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.attributeDefinitions">attributeDefinitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>[]</code> | A list of attributes that describe the key schema for the table and indexes. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.billingMode">billingMode</a></code> | <code>string</code> | Specify how you are charged for read and write throughput and how you manage capacity. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines if a table is protected from deletion. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>[]</code> | Global secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.importSourceSpecification">importSourceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | Specifies the properties of data being imported from the S3 bucket source to the" table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.kinesisStreamSpecification">kinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | The Kinesis Data Streams configuration for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndexes">localSecondaryIndexes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>[]</code> | Local secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | Sets the maximum number of read and write units for the specified on-demand table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecoverySpecification">pointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | The settings used to enable point in time recovery. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | An AWS resource-based policy document in JSON format that will be attached to the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | Specifies the settings to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.streamSpecification">streamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | The settings for the DDB table stream, which captures changes to items stored in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableClass">tableClass</a></code> | <code>string</code> | The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableName">tableName</a></code> | <code>string</code> | A name for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>[]</code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.timeToLiveSpecification">timeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | Specifies the Time to Live (TTL) settings for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | Represents the warm throughput (in read units per second and write units per second) for creating a table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.keySchema"></a>

```typescript
public readonly keySchema: string;
```

- *Type:* string

Specifies the attributes that make up the primary key for the table.

The attributes in the ``KeySchema`` property must also be defined in the ``AttributeDefinitions`` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `attributeDefinitions`<sup>Optional</sup> <a name="attributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.attributeDefinitions"></a>

```typescript
public readonly attributeDefinitions: IResolvable | DynamodbTableAttributeDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>[]

A list of attributes that describe the key schema for the table and indexes.

This property is required to create a DDB table.
 Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#attribute_definitions DynamodbTable#attribute_definitions}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.billingMode"></a>

```typescript
public readonly billingMode: string;
```

- *Type:* string

Specify how you are charged for read and write throughput and how you manage capacity.

Valid values include:
  +  ``PAY_PER_REQUEST`` - We recommend using ``PAY_PER_REQUEST`` for most DynamoDB workloads. ``PAY_PER_REQUEST`` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html). 
  +  ``PROVISIONED`` - We recommend using ``PROVISIONED`` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. ``PROVISIONED`` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).
  
 If not specified, the default is ``PROVISIONED``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}

---

##### `contributorInsightsSpecification`<sup>Optional</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.contributorInsightsSpecification"></a>

```typescript
public readonly contributorInsightsSpecification: DynamodbTableContributorInsightsSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines if a table is protected from deletion.

When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="globalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndexes"></a>

```typescript
public readonly globalSecondaryIndexes: IResolvable | DynamodbTableGlobalSecondaryIndexes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>[]

Global secondary indexes to be created on the table.

You can create up to 20 global secondary indexes.
  If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is ``ACTIVE``. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
 If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index. 
 Updates are not supported. The following are exceptions:
  +  If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
  +  You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#global_secondary_indexes DynamodbTable#global_secondary_indexes}

---

##### `importSourceSpecification`<sup>Optional</sup> <a name="importSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.importSourceSpecification"></a>

```typescript
public readonly importSourceSpecification: DynamodbTableImportSourceSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

Specifies the properties of data being imported from the S3 bucket source to the" table.

If you specify the ``ImportSourceSpecification`` property, and also specify either the ``StreamSpecification``, the ``TableClass`` property, the ``DeletionProtectionEnabled`` property, or the ``WarmThroughput`` property, the IAM entity creating/updating stack must have ``UpdateTable`` permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#import_source_specification DynamodbTable#import_source_specification}

---

##### `kinesisStreamSpecification`<sup>Optional</sup> <a name="kinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.kinesisStreamSpecification"></a>

```typescript
public readonly kinesisStreamSpecification: DynamodbTableKinesisStreamSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

The Kinesis Data Streams configuration for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#kinesis_stream_specification DynamodbTable#kinesis_stream_specification}

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="localSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndexes"></a>

```typescript
public readonly localSecondaryIndexes: IResolvable | DynamodbTableLocalSecondaryIndexes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>[]

Local secondary indexes to be created on the table.

You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#local_secondary_indexes DynamodbTable#local_secondary_indexes}

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput"></a>

```typescript
public readonly onDemandThroughput: DynamodbTableOnDemandThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

Sets the maximum number of read and write units for the specified on-demand table.

If you use this property, you must specify ``MaxReadRequestUnits``, ``MaxWriteRequestUnits``, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `pointInTimeRecoverySpecification`<sup>Optional</sup> <a name="pointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecoverySpecification"></a>

```typescript
public readonly pointInTimeRecoverySpecification: DynamodbTablePointInTimeRecoverySpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

The settings used to enable point in time recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#point_in_time_recovery_specification DynamodbTable#point_in_time_recovery_specification}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: DynamodbTableProvisionedThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``.

For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html). 
 If you set ``BillingMode`` as ``PROVISIONED``, you must specify this property. If you set ``BillingMode`` as ``PAY_PER_REQUEST``, you cannot specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: DynamodbTableResourcePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

An AWS resource-based policy document in JSON format that will be attached to the table.

When you attach a resource-based policy while creating a table, the policy application is *strongly consistent*.
 The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
  You need to specify the ``CreateTable`` and ``PutResourcePolicy`` IAM actions for authorizing a user to create a table with a resource-based policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: DynamodbTableSseSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

Specifies the settings to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#sse_specification DynamodbTable#sse_specification}

---

##### `streamSpecification`<sup>Optional</sup> <a name="streamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.streamSpecification"></a>

```typescript
public readonly streamSpecification: DynamodbTableStreamSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

The settings for the DDB table stream, which captures changes to items stored in the table.

Including this property in your CFNlong template automatically enables streaming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#stream_specification DynamodbTable#stream_specification}

---

##### `tableClass`<sup>Optional</sup> <a name="tableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableClass"></a>

```typescript
public readonly tableClass: string;
```

- *Type:* string

The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

A name for the table.

If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#table_name DynamodbTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DynamodbTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>[]

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}

---

##### `timeToLiveSpecification`<sup>Optional</sup> <a name="timeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.timeToLiveSpecification"></a>

```typescript
public readonly timeToLiveSpecification: DynamodbTableTimeToLiveSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

Specifies the Time to Live (TTL) settings for the table.

For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#time_to_live_specification DynamodbTable#time_to_live_specification}

---

##### `warmThroughput`<sup>Optional</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: DynamodbTableWarmThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

Represents the warm throughput (in read units per second and write units per second) for creating a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

### DynamodbTableContributorInsightsSpecification <a name="DynamodbTableContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableContributorInsightsSpecification: dynamodbTable.DynamodbTableContributorInsightsSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.mode">mode</a></code> | <code>string</code> | Specifies the CloudWatch Contributor Insights mode for a table. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are ``ACCESSED_AND_THROTTLED_KEYS`` (tracks all access and throttled events) or ``THROTTLED_KEYS`` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

### DynamodbTableGlobalSecondaryIndexes <a name="DynamodbTableGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableGlobalSecondaryIndexes: dynamodbTable.DynamodbTableGlobalSecondaryIndexes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.indexName">indexName</a></code> | <code>string</code> | The name of the global secondary index. The name must be unique among all other indexes on this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.keySchema">keySchema</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>[]</code> | The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | The maximum number of read and write units for the specified global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | Represents attributes that are copied (projected) from the table into the global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | Represents the provisioned throughput settings for the specified global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. |

---

##### `contributorInsightsSpecification`<sup>Optional</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.contributorInsightsSpecification"></a>

```typescript
public readonly contributorInsightsSpecification: DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The name of the global secondary index. The name must be unique among all other indexes on this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#index_name DynamodbTable#index_name}

---

##### `keySchema`<sup>Optional</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.keySchema"></a>

```typescript
public readonly keySchema: IResolvable | DynamodbTableGlobalSecondaryIndexesKeySchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>[]

The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
 The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.onDemandThroughput"></a>

```typescript
public readonly onDemandThroughput: DynamodbTableGlobalSecondaryIndexesOnDemandThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

The maximum number of read and write units for the specified global secondary index.

If you use this parameter, you must specify ``MaxReadRequestUnits``, ``MaxWriteRequestUnits``, or both. You must use either ``OnDemandThroughput`` or ``ProvisionedThroughput`` based on your table's capacity mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `projection`<sup>Optional</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.projection"></a>

```typescript
public readonly projection: DynamodbTableGlobalSecondaryIndexesProjection;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

Represents attributes that are copied (projected) from the table into the global secondary index.

These are in addition to the primary key attributes and index key attributes, which are automatically projected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#projection DynamodbTable#projection}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: DynamodbTableGlobalSecondaryIndexesProvisionedThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

Represents the provisioned throughput settings for the specified global secondary index.

You must use either ``OnDemandThroughput`` or ``ProvisionedThroughput`` based on your table's capacity mode.
 For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `warmThroughput`<sup>Optional</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: DynamodbTableGlobalSecondaryIndexesWarmThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index.

If you use this parameter, you must specify ``ReadUnitsPerSecond``, ``WriteUnitsPerSecond``, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

### DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification <a name="DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification: dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.mode">mode</a></code> | <code>string</code> | Specifies the CloudWatch Contributor Insights mode for a table. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are ``ACCESSED_AND_THROTTLED_KEYS`` (tracks all access and throttled events) or ``THROTTLED_KEYS`` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

### DynamodbTableGlobalSecondaryIndexesKeySchema <a name="DynamodbTableGlobalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableGlobalSecondaryIndexesKeySchema: dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.attributeName">attributeName</a></code> | <code>string</code> | The name of a key attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.keyType">keyType</a></code> | <code>string</code> | The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

The name of a key attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
 The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#key_type DynamodbTable#key_type}

---

### DynamodbTableGlobalSecondaryIndexesOnDemandThroughput <a name="DynamodbTableGlobalSecondaryIndexesOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableGlobalSecondaryIndexesOnDemandThroughput: dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>number</code> | Maximum number of read request units for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>number</code> | Maximum number of write request units for the specified table. |

---

##### `maxReadRequestUnits`<sup>Optional</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxReadRequestUnits"></a>

```typescript
public readonly maxReadRequestUnits: number;
```

- *Type:* number

Maximum number of read request units for the specified table.

To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxReadRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxReadRequestUnits`` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

##### `maxWriteRequestUnits`<sup>Optional</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxWriteRequestUnits"></a>

```typescript
public readonly maxWriteRequestUnits: number;
```

- *Type:* number

Maximum number of write request units for the specified table.

To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxWriteRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxWriteRequestUnits`` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

### DynamodbTableGlobalSecondaryIndexesProjection <a name="DynamodbTableGlobalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableGlobalSecondaryIndexesProjection: dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>string[]</code> | Represents the non-key attribute names which will be projected into the index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.projectionType">projectionType</a></code> | <code>string</code> | The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index. |

---

##### `nonKeyAttributes`<sup>Optional</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.nonKeyAttributes"></a>

```typescript
public readonly nonKeyAttributes: string[];
```

- *Type:* string[]

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of ``NonKeyAttributes`` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of ``INCLUDE``. You still can specify the ProjectionType of ``ALL`` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

##### `projectionType`<sup>Optional</sup> <a name="projectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.projectionType"></a>

```typescript
public readonly projectionType: string;
```

- *Type:* string

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

+  ``INCLUDE`` - In addition to the attributes described in ``KEYS_ONLY``, the secondary index will include other non-key attributes that you specify.
  +  ``ALL`` - All of the table attributes are projected into the index.
  
 When using the DynamoDB console, ``ALL`` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

### DynamodbTableGlobalSecondaryIndexesProvisionedThroughput <a name="DynamodbTableGlobalSecondaryIndexesProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableGlobalSecondaryIndexesProvisionedThroughput: dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>number</code> | The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. |

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
 If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.writeCapacityUnits"></a>

```typescript
public readonly writeCapacityUnits: number;
```

- *Type:* number

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
 If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

### DynamodbTableGlobalSecondaryIndexesWarmThroughput <a name="DynamodbTableGlobalSecondaryIndexesWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableGlobalSecondaryIndexesWarmThroughput: dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>number</code> | Represents the number of read operations your base table can instantaneously support. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>number</code> | Represents the number of write operations your base table can instantaneously support. |

---

##### `readUnitsPerSecond`<sup>Optional</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.readUnitsPerSecond"></a>

```typescript
public readonly readUnitsPerSecond: number;
```

- *Type:* number

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

##### `writeUnitsPerSecond`<sup>Optional</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.writeUnitsPerSecond"></a>

```typescript
public readonly writeUnitsPerSecond: number;
```

- *Type:* number

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

### DynamodbTableImportSourceSpecification <a name="DynamodbTableImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableImportSourceSpecification: dynamodbTable.DynamodbTableImportSourceSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputCompressionType">inputCompressionType</a></code> | <code>string</code> | Type of compression to be used on the input coming from the imported table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormat">inputFormat</a></code> | <code>string</code> | The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormatOptions">inputFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | Additional properties that specify how the input is formatted,. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.s3BucketSource">s3BucketSource</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | The S3 bucket that provides the source for the import. |

---

##### `inputCompressionType`<sup>Optional</sup> <a name="inputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputCompressionType"></a>

```typescript
public readonly inputCompressionType: string;
```

- *Type:* string

Type of compression to be used on the input coming from the imported table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}

---

##### `inputFormatOptions`<sup>Optional</sup> <a name="inputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormatOptions"></a>

```typescript
public readonly inputFormatOptions: DynamodbTableImportSourceSpecificationInputFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

Additional properties that specify how the input is formatted,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}

---

##### `s3BucketSource`<sup>Optional</sup> <a name="s3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.s3BucketSource"></a>

```typescript
public readonly s3BucketSource: DynamodbTableImportSourceSpecificationS3BucketSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

The S3 bucket that provides the source for the import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}

---

### DynamodbTableImportSourceSpecificationInputFormatOptions <a name="DynamodbTableImportSourceSpecificationInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableImportSourceSpecificationInputFormatOptions: dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | The options for imported source files in CSV format. The values are Delimiter and HeaderList. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.property.csv"></a>

```typescript
public readonly csv: DynamodbTableImportSourceSpecificationInputFormatOptionsCsv;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

The options for imported source files in CSV format. The values are Delimiter and HeaderList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}

---

### DynamodbTableImportSourceSpecificationInputFormatOptionsCsv <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableImportSourceSpecificationInputFormatOptionsCsv: dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>string</code> | The delimiter used for separating items in the CSV file being imported. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.headerList">headerList</a></code> | <code>string[]</code> | List of the headers used to specify a common header for all source CSV files being imported. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

The delimiter used for separating items in the CSV file being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}

---

##### `headerList`<sup>Optional</sup> <a name="headerList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.headerList"></a>

```typescript
public readonly headerList: string[];
```

- *Type:* string[]

List of the headers used to specify a common header for all source CSV files being imported.

If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}

---

### DynamodbTableImportSourceSpecificationS3BucketSource <a name="DynamodbTableImportSourceSpecificationS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableImportSourceSpecificationS3BucketSource: dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The S3 bucket that is being imported from. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | The account number of the S3 bucket that is being imported from. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | The key prefix shared by all S3 Objects that are being imported. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The S3 bucket that is being imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#s3_bucket DynamodbTable#s3_bucket}

---

##### `s3BucketOwner`<sup>Optional</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

The account number of the S3 bucket that is being imported from.

If the bucket is owned by the requester this is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#s3_bucket_owner DynamodbTable#s3_bucket_owner}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

The key prefix shared by all S3 Objects that are being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#s3_key_prefix DynamodbTable#s3_key_prefix}

---

### DynamodbTableKinesisStreamSpecification <a name="DynamodbTableKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableKinesisStreamSpecification: dynamodbTable.DynamodbTableKinesisStreamSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.approximateCreationDateTimePrecision">approximateCreationDateTimePrecision</a></code> | <code>string</code> | The precision for the time and date that the stream was created. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.streamArn">streamArn</a></code> | <code>string</code> | The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024. |

---

##### `approximateCreationDateTimePrecision`<sup>Optional</sup> <a name="approximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.approximateCreationDateTimePrecision"></a>

```typescript
public readonly approximateCreationDateTimePrecision: string;
```

- *Type:* string

The precision for the time and date that the stream was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#approximate_creation_date_time_precision DynamodbTable#approximate_creation_date_time_precision}

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#stream_arn DynamodbTable#stream_arn}

---

### DynamodbTableLocalSecondaryIndexes <a name="DynamodbTableLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableLocalSecondaryIndexes: dynamodbTable.DynamodbTableLocalSecondaryIndexes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.indexName">indexName</a></code> | <code>string</code> | The name of the local secondary index. The name must be unique among all other indexes on this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.keySchema">keySchema</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>[]</code> | The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | Represents attributes that are copied (projected) from the table into the local secondary index. |

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The name of the local secondary index. The name must be unique among all other indexes on this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#index_name DynamodbTable#index_name}

---

##### `keySchema`<sup>Optional</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.keySchema"></a>

```typescript
public readonly keySchema: IResolvable | DynamodbTableLocalSecondaryIndexesKeySchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>[]

The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
 The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `projection`<sup>Optional</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.projection"></a>

```typescript
public readonly projection: DynamodbTableLocalSecondaryIndexesProjection;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

Represents attributes that are copied (projected) from the table into the local secondary index.

These are in addition to the primary key attributes and index key attributes, which are automatically projected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#projection DynamodbTable#projection}

---

### DynamodbTableLocalSecondaryIndexesKeySchema <a name="DynamodbTableLocalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableLocalSecondaryIndexesKeySchema: dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.attributeName">attributeName</a></code> | <code>string</code> | The name of a key attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.keyType">keyType</a></code> | <code>string</code> | The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

The name of a key attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
 The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#key_type DynamodbTable#key_type}

---

### DynamodbTableLocalSecondaryIndexesProjection <a name="DynamodbTableLocalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableLocalSecondaryIndexesProjection: dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>string[]</code> | Represents the non-key attribute names which will be projected into the index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.projectionType">projectionType</a></code> | <code>string</code> | The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index. |

---

##### `nonKeyAttributes`<sup>Optional</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.nonKeyAttributes"></a>

```typescript
public readonly nonKeyAttributes: string[];
```

- *Type:* string[]

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of ``NonKeyAttributes`` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of ``INCLUDE``. You still can specify the ProjectionType of ``ALL`` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

##### `projectionType`<sup>Optional</sup> <a name="projectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.projectionType"></a>

```typescript
public readonly projectionType: string;
```

- *Type:* string

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

+  ``INCLUDE`` - In addition to the attributes described in ``KEYS_ONLY``, the secondary index will include other non-key attributes that you specify.
  +  ``ALL`` - All of the table attributes are projected into the index.
  
 When using the DynamoDB console, ``ALL`` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

### DynamodbTableOnDemandThroughput <a name="DynamodbTableOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableOnDemandThroughput: dynamodbTable.DynamodbTableOnDemandThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>number</code> | Maximum number of read request units for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>number</code> | Maximum number of write request units for the specified table. |

---

##### `maxReadRequestUnits`<sup>Optional</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits"></a>

```typescript
public readonly maxReadRequestUnits: number;
```

- *Type:* number

Maximum number of read request units for the specified table.

To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxReadRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxReadRequestUnits`` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

##### `maxWriteRequestUnits`<sup>Optional</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits"></a>

```typescript
public readonly maxWriteRequestUnits: number;
```

- *Type:* number

Maximum number of write request units for the specified table.

To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxWriteRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxWriteRequestUnits`` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

### DynamodbTablePointInTimeRecoverySpecification <a name="DynamodbTablePointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTablePointInTimeRecoverySpecification: dynamodbTable.DynamodbTablePointInTimeRecoverySpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.recoveryPeriodInDays">recoveryPeriodInDays</a></code> | <code>number</code> | The number of preceding days for which continuous backups are taken and maintained. |

---

##### `pointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled"></a>

```typescript
public readonly pointInTimeRecoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#point_in_time_recovery_enabled DynamodbTable#point_in_time_recovery_enabled}

---

##### `recoveryPeriodInDays`<sup>Optional</sup> <a name="recoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.recoveryPeriodInDays"></a>

```typescript
public readonly recoveryPeriodInDays: number;
```

- *Type:* number

The number of preceding days for which continuous backups are taken and maintained.

Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#recovery_period_in_days DynamodbTable#recovery_period_in_days}

---

### DynamodbTableProvisionedThroughput <a name="DynamodbTableProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableProvisionedThroughput: dynamodbTable.DynamodbTableProvisionedThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>number</code> | The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. |

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
 If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.writeCapacityUnits"></a>

```typescript
public readonly writeCapacityUnits: number;
```

- *Type:* number

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
 If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

### DynamodbTableResourcePolicy <a name="DynamodbTableResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableResourcePolicy: dynamodbTable.DynamodbTableResourcePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.property.policyDocument">policyDocument</a></code> | <code>string</code> | A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. |

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

### DynamodbTableSseSpecification <a name="DynamodbTableSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableSseSpecification: dynamodbTable.DynamodbTableSseSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | The KMS key that should be used for the KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseEnabled">sseEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseType">sseType</a></code> | <code>string</code> | Server-side encryption type. |

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

The KMS key that should be used for the KMS encryption.

To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key ``alias/aws/dynamodb``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#kms_master_key_id DynamodbTable#kms_master_key_id}

---

##### `sseEnabled`<sup>Optional</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseEnabled"></a>

```typescript
public readonly sseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key.

If enabled (true), server-side encryption type is set to ``KMS`` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#sse_enabled DynamodbTable#sse_enabled}

---

##### `sseType`<sup>Optional</sup> <a name="sseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseType"></a>

```typescript
public readonly sseType: string;
```

- *Type:* string

Server-side encryption type.

The only supported value is:
  +  ``KMS`` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#sse_type DynamodbTable#sse_type}

---

### DynamodbTableStreamSpecification <a name="DynamodbTableStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableStreamSpecification: dynamodbTable.DynamodbTableStreamSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.streamViewType">streamViewType</a></code> | <code>string</code> | When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table. |

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: DynamodbTableStreamSpecificationResourcePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams.

Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
  When you remove the ``StreamSpecification`` property from the template, DynamoDB disables the stream but retains any attached resource policy until the stream is deleted after 24 hours. When you modify the ``StreamViewType`` property, DynamoDB creates a new stream and retains the old stream's resource policy. The old stream and its resource policy are deleted after the 24-hour retention period.
  In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `streamViewType`<sup>Optional</sup> <a name="streamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.streamViewType"></a>

```typescript
public readonly streamViewType: string;
```

- *Type:* string

When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table.

Valid values for ``StreamViewType`` are:
  +  ``KEYS_ONLY`` - Only the key attributes of the modified item are written to the stream.
  +  ``NEW_IMAGE`` - The entire item, as it appears after it was modified, is written to the stream.
  +  ``OLD_IMAGE`` - The entire item, as it appeared before it was modified, is written to the stream.
  +  ``NEW_AND_OLD_IMAGES`` - Both the new and the old item images of the item are written to the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}

---

### DynamodbTableStreamSpecificationResourcePolicy <a name="DynamodbTableStreamSpecificationResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableStreamSpecificationResourcePolicy: dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.property.policyDocument">policyDocument</a></code> | <code>string</code> | A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. |

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

### DynamodbTableTags <a name="DynamodbTableTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableTags: dynamodbTable.DynamodbTableTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.value">value</a></code> | <code>string</code> | The value of the tag. Tag values are case-sensitive and can be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#key DynamodbTable#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag. Tag values are case-sensitive and can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#value DynamodbTable#value}

---

### DynamodbTableTimeToLiveSpecification <a name="DynamodbTableTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableTimeToLiveSpecification: dynamodbTable.DynamodbTableTimeToLiveSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.attributeName">attributeName</a></code> | <code>string</code> | The name of the TTL attribute used to store the expiration time for items in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether TTL is to be enabled (true) or disabled (false) on the table. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

The name of the TTL attribute used to store the expiration time for items in the table.

+  The ``AttributeName`` property is required when enabling the TTL, or when TTL is already enabled.
  +  To update this property, you must first disable TTL and then enable TTL with the new attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether TTL is to be enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

### DynamodbTableWarmThroughput <a name="DynamodbTableWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

const dynamodbTableWarmThroughput: dynamodbTable.DynamodbTableWarmThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>number</code> | Represents the number of read operations your base table can instantaneously support. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>number</code> | Represents the number of write operations your base table can instantaneously support. |

---

##### `readUnitsPerSecond`<sup>Optional</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.readUnitsPerSecond"></a>

```typescript
public readonly readUnitsPerSecond: number;
```

- *Type:* number

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

##### `writeUnitsPerSecond`<sup>Optional</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.writeUnitsPerSecond"></a>

```typescript
public readonly writeUnitsPerSecond: number;
```

- *Type:* number

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableAttributeDefinitionsList <a name="DynamodbTableAttributeDefinitionsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableAttributeDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get"></a>

```typescript
public get(index: number): DynamodbTableAttributeDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableAttributeDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>[]

---


### DynamodbTableAttributeDefinitionsOutputReference <a name="DynamodbTableAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeType">resetAttributeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeName"></a>

```typescript
public resetAttributeName(): void
```

##### `resetAttributeType` <a name="resetAttributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeType"></a>

```typescript
public resetAttributeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeTypeInput">attributeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeType">attributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `attributeTypeInput`<sup>Optional</sup> <a name="attributeTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeTypeInput"></a>

```typescript
public readonly attributeTypeInput: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableAttributeDefinitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>

---


### DynamodbTableContributorInsightsSpecificationOutputReference <a name="DynamodbTableContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableContributorInsightsSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---


### DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference <a name="DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---


### DynamodbTableGlobalSecondaryIndexesKeySchemaList <a name="DynamodbTableGlobalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get"></a>

```typescript
public get(index: number): DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexesKeySchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>[]

---


### DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference <a name="DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetAttributeName"></a>

```typescript
public resetAttributeName(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetKeyType"></a>

```typescript
public resetKeyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexesKeySchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>

---


### DynamodbTableGlobalSecondaryIndexesList <a name="DynamodbTableGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get"></a>

```typescript
public get(index: number): DynamodbTableGlobalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>[]

---


### DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxReadRequestUnits">resetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">resetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReadRequestUnits` <a name="resetMaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```typescript
public resetMaxReadRequestUnits(): void
```

##### `resetMaxWriteRequestUnits` <a name="resetMaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```typescript
public resetMaxWriteRequestUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">maxReadRequestUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">maxWriteRequestUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxReadRequestUnitsInput`<sup>Optional</sup> <a name="maxReadRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```typescript
public readonly maxReadRequestUnitsInput: number;
```

- *Type:* number

---

##### `maxWriteRequestUnitsInput`<sup>Optional</sup> <a name="maxWriteRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```typescript
public readonly maxWriteRequestUnitsInput: number;
```

- *Type:* number

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```typescript
public readonly maxReadRequestUnits: number;
```

- *Type:* number

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```typescript
public readonly maxWriteRequestUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexesOnDemandThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---


### DynamodbTableGlobalSecondaryIndexesOutputReference <a name="DynamodbTableGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification">putContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema">putKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput">putOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection">putProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput">putProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput">putWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetContributorInsightsSpecification">resetContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetKeySchema">resetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetOnDemandThroughput">resetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProjection">resetProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetWarmThroughput">resetWarmThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContributorInsightsSpecification` <a name="putContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification"></a>

```typescript
public putContributorInsightsSpecification(value: DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---

##### `putKeySchema` <a name="putKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema"></a>

```typescript
public putKeySchema(value: IResolvable | DynamodbTableGlobalSecondaryIndexesKeySchema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>[]

---

##### `putOnDemandThroughput` <a name="putOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput"></a>

```typescript
public putOnDemandThroughput(value: DynamodbTableGlobalSecondaryIndexesOnDemandThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---

##### `putProjection` <a name="putProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection"></a>

```typescript
public putProjection(value: DynamodbTableGlobalSecondaryIndexesProjection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---

##### `putProvisionedThroughput` <a name="putProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput"></a>

```typescript
public putProvisionedThroughput(value: DynamodbTableGlobalSecondaryIndexesProvisionedThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---

##### `putWarmThroughput` <a name="putWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput"></a>

```typescript
public putWarmThroughput(value: DynamodbTableGlobalSecondaryIndexesWarmThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---

##### `resetContributorInsightsSpecification` <a name="resetContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetContributorInsightsSpecification"></a>

```typescript
public resetContributorInsightsSpecification(): void
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetIndexName"></a>

```typescript
public resetIndexName(): void
```

##### `resetKeySchema` <a name="resetKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetKeySchema"></a>

```typescript
public resetKeySchema(): void
```

##### `resetOnDemandThroughput` <a name="resetOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetOnDemandThroughput"></a>

```typescript
public resetOnDemandThroughput(): void
```

##### `resetProjection` <a name="resetProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProjection"></a>

```typescript
public resetProjection(): void
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProvisionedThroughput"></a>

```typescript
public resetProvisionedThroughput(): void
```

##### `resetWarmThroughput` <a name="resetWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetWarmThroughput"></a>

```typescript
public resetWarmThroughput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList">DynamodbTableGlobalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecificationInput">contributorInsightsSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchemaInput">keySchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughputInput">onDemandThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projectionInput">projectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughputInput">warmThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contributorInsightsSpecification`<sup>Required</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification"></a>

```typescript
public readonly contributorInsightsSpecification: DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a>

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema"></a>

```typescript
public readonly keySchema: DynamodbTableGlobalSecondaryIndexesKeySchemaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList">DynamodbTableGlobalSecondaryIndexesKeySchemaList</a>

---

##### `onDemandThroughput`<sup>Required</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput"></a>

```typescript
public readonly onDemandThroughput: DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projection"></a>

```typescript
public readonly projection: DynamodbTableGlobalSecondaryIndexesProjectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a>

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a>

---

##### `warmThroughput`<sup>Required</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a>

---

##### `contributorInsightsSpecificationInput`<sup>Optional</sup> <a name="contributorInsightsSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecificationInput"></a>

```typescript
public readonly contributorInsightsSpecificationInput: IResolvable | DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchemaInput"></a>

```typescript
public readonly keySchemaInput: IResolvable | DynamodbTableGlobalSecondaryIndexesKeySchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>[]

---

##### `onDemandThroughputInput`<sup>Optional</sup> <a name="onDemandThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughputInput"></a>

```typescript
public readonly onDemandThroughputInput: IResolvable | DynamodbTableGlobalSecondaryIndexesOnDemandThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---

##### `projectionInput`<sup>Optional</sup> <a name="projectionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projectionInput"></a>

```typescript
public readonly projectionInput: IResolvable | DynamodbTableGlobalSecondaryIndexesProjection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughputInput"></a>

```typescript
public readonly provisionedThroughputInput: IResolvable | DynamodbTableGlobalSecondaryIndexesProvisionedThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---

##### `warmThroughputInput`<sup>Optional</sup> <a name="warmThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughputInput"></a>

```typescript
public readonly warmThroughputInput: IResolvable | DynamodbTableGlobalSecondaryIndexesWarmThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>

---


### DynamodbTableGlobalSecondaryIndexesProjectionOutputReference <a name="DynamodbTableGlobalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes">resetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetProjectionType">resetProjectionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonKeyAttributes` <a name="resetNonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes"></a>

```typescript
public resetNonKeyAttributes(): void
```

##### `resetProjectionType` <a name="resetProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetProjectionType"></a>

```typescript
public resetProjectionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput">nonKeyAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput">projectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType">projectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nonKeyAttributesInput`<sup>Optional</sup> <a name="nonKeyAttributesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput"></a>

```typescript
public readonly nonKeyAttributesInput: string[];
```

- *Type:* string[]

---

##### `projectionTypeInput`<sup>Optional</sup> <a name="projectionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput"></a>

```typescript
public readonly projectionTypeInput: string;
```

- *Type:* string

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```typescript
public readonly nonKeyAttributes: string[];
```

- *Type:* string[]

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```typescript
public readonly projectionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexesProjection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---


### DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetReadCapacityUnits">resetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetWriteCapacityUnits">resetWriteCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadCapacityUnits` <a name="resetReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```typescript
public resetReadCapacityUnits(): void
```

##### `resetWriteCapacityUnits` <a name="resetWriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```typescript
public resetWriteCapacityUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnitsInput">readCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">writeCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readCapacityUnitsInput`<sup>Optional</sup> <a name="readCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```typescript
public readonly readCapacityUnitsInput: number;
```

- *Type:* number

---

##### `writeCapacityUnitsInput`<sup>Optional</sup> <a name="writeCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```typescript
public readonly writeCapacityUnitsInput: number;
```

- *Type:* number

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```typescript
public readonly writeCapacityUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexesProvisionedThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---


### DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetReadUnitsPerSecond">resetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetWriteUnitsPerSecond">resetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadUnitsPerSecond` <a name="resetReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```typescript
public resetReadUnitsPerSecond(): void
```

##### `resetWriteUnitsPerSecond` <a name="resetWriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```typescript
public resetWriteUnitsPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecondInput">readUnitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecondInput">writeUnitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readUnitsPerSecondInput`<sup>Optional</sup> <a name="readUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```typescript
public readonly readUnitsPerSecondInput: number;
```

- *Type:* number

---

##### `writeUnitsPerSecondInput`<sup>Optional</sup> <a name="writeUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```typescript
public readonly writeUnitsPerSecondInput: number;
```

- *Type:* number

---

##### `readUnitsPerSecond`<sup>Required</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```typescript
public readonly readUnitsPerSecond: number;
```

- *Type:* number

---

##### `writeUnitsPerSecond`<sup>Required</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```typescript
public readonly writeUnitsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableGlobalSecondaryIndexesWarmThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---


### DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetHeaderList">resetHeaderList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetHeaderList` <a name="resetHeaderList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetHeaderList"></a>

```typescript
public resetHeaderList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerListInput">headerListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList">headerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `headerListInput`<sup>Optional</sup> <a name="headerListInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerListInput"></a>

```typescript
public readonly headerListInput: string[];
```

- *Type:* string[]

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `headerList`<sup>Required</sup> <a name="headerList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList"></a>

```typescript
public readonly headerList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableImportSourceSpecificationInputFormatOptionsCsv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---


### DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resetCsv">resetCsv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv"></a>

```typescript
public putCsv(value: DynamodbTableImportSourceSpecificationInputFormatOptionsCsv): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resetCsv"></a>

```typescript
public resetCsv(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csvInput">csvInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv"></a>

```typescript
public readonly csv: DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csvInput"></a>

```typescript
public readonly csvInput: IResolvable | DynamodbTableImportSourceSpecificationInputFormatOptionsCsv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableImportSourceSpecificationInputFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---


### DynamodbTableImportSourceSpecificationOutputReference <a name="DynamodbTableImportSourceSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions">putInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource">putS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputCompressionType">resetInputCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormatOptions">resetInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetS3BucketSource">resetS3BucketSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputFormatOptions` <a name="putInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions"></a>

```typescript
public putInputFormatOptions(value: DynamodbTableImportSourceSpecificationInputFormatOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---

##### `putS3BucketSource` <a name="putS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource"></a>

```typescript
public putS3BucketSource(value: DynamodbTableImportSourceSpecificationS3BucketSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---

##### `resetInputCompressionType` <a name="resetInputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputCompressionType"></a>

```typescript
public resetInputCompressionType(): void
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormat"></a>

```typescript
public resetInputFormat(): void
```

##### `resetInputFormatOptions` <a name="resetInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormatOptions"></a>

```typescript
public resetInputFormatOptions(): void
```

##### `resetS3BucketSource` <a name="resetS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetS3BucketSource"></a>

```typescript
public resetS3BucketSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions">inputFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource">s3BucketSource</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionTypeInput">inputCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptionsInput">inputFormatOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSourceInput">s3BucketSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType">inputCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormat">inputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputFormatOptions`<sup>Required</sup> <a name="inputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions"></a>

```typescript
public readonly inputFormatOptions: DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a>

---

##### `s3BucketSource`<sup>Required</sup> <a name="s3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource"></a>

```typescript
public readonly s3BucketSource: DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a>

---

##### `inputCompressionTypeInput`<sup>Optional</sup> <a name="inputCompressionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionTypeInput"></a>

```typescript
public readonly inputCompressionTypeInput: string;
```

- *Type:* string

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatInput"></a>

```typescript
public readonly inputFormatInput: string;
```

- *Type:* string

---

##### `inputFormatOptionsInput`<sup>Optional</sup> <a name="inputFormatOptionsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptionsInput"></a>

```typescript
public readonly inputFormatOptionsInput: IResolvable | DynamodbTableImportSourceSpecificationInputFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---

##### `s3BucketSourceInput`<sup>Optional</sup> <a name="s3BucketSourceInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSourceInput"></a>

```typescript
public readonly s3BucketSourceInput: IResolvable | DynamodbTableImportSourceSpecificationS3BucketSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---

##### `inputCompressionType`<sup>Required</sup> <a name="inputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType"></a>

```typescript
public readonly inputCompressionType: string;
```

- *Type:* string

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableImportSourceSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---


### DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference <a name="DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3BucketOwner">resetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3BucketOwner` <a name="resetS3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3BucketOwner"></a>

```typescript
public resetS3BucketOwner(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwnerInput">s3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3BucketOwnerInput`<sup>Optional</sup> <a name="s3BucketOwnerInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwnerInput"></a>

```typescript
public readonly s3BucketOwnerInput: string;
```

- *Type:* string

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableImportSourceSpecificationS3BucketSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---


### DynamodbTableKinesisStreamSpecificationOutputReference <a name="DynamodbTableKinesisStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetApproximateCreationDateTimePrecision">resetApproximateCreationDateTimePrecision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApproximateCreationDateTimePrecision` <a name="resetApproximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetApproximateCreationDateTimePrecision"></a>

```typescript
public resetApproximateCreationDateTimePrecision(): void
```

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetStreamArn"></a>

```typescript
public resetStreamArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecisionInput">approximateCreationDateTimePrecisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision">approximateCreationDateTimePrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approximateCreationDateTimePrecisionInput`<sup>Optional</sup> <a name="approximateCreationDateTimePrecisionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecisionInput"></a>

```typescript
public readonly approximateCreationDateTimePrecisionInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `approximateCreationDateTimePrecision`<sup>Required</sup> <a name="approximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision"></a>

```typescript
public readonly approximateCreationDateTimePrecision: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableKinesisStreamSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---


### DynamodbTableLocalSecondaryIndexesKeySchemaList <a name="DynamodbTableLocalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get"></a>

```typescript
public get(index: number): DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableLocalSecondaryIndexesKeySchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>[]

---


### DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference <a name="DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetAttributeName"></a>

```typescript
public resetAttributeName(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetKeyType"></a>

```typescript
public resetKeyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableLocalSecondaryIndexesKeySchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>

---


### DynamodbTableLocalSecondaryIndexesList <a name="DynamodbTableLocalSecondaryIndexesList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableLocalSecondaryIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get"></a>

```typescript
public get(index: number): DynamodbTableLocalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableLocalSecondaryIndexes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>[]

---


### DynamodbTableLocalSecondaryIndexesOutputReference <a name="DynamodbTableLocalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema">putKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection">putProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetKeySchema">resetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetProjection">resetProjection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeySchema` <a name="putKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema"></a>

```typescript
public putKeySchema(value: IResolvable | DynamodbTableLocalSecondaryIndexesKeySchema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>[]

---

##### `putProjection` <a name="putProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection"></a>

```typescript
public putProjection(value: DynamodbTableLocalSecondaryIndexesProjection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---

##### `resetIndexName` <a name="resetIndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetIndexName"></a>

```typescript
public resetIndexName(): void
```

##### `resetKeySchema` <a name="resetKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetKeySchema"></a>

```typescript
public resetKeySchema(): void
```

##### `resetProjection` <a name="resetProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetProjection"></a>

```typescript
public resetProjection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList">DynamodbTableLocalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference">DynamodbTableLocalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchemaInput">keySchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projectionInput">projectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema"></a>

```typescript
public readonly keySchema: DynamodbTableLocalSecondaryIndexesKeySchemaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList">DynamodbTableLocalSecondaryIndexesKeySchemaList</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projection"></a>

```typescript
public readonly projection: DynamodbTableLocalSecondaryIndexesProjectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference">DynamodbTableLocalSecondaryIndexesProjectionOutputReference</a>

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchemaInput"></a>

```typescript
public readonly keySchemaInput: IResolvable | DynamodbTableLocalSecondaryIndexesKeySchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>[]

---

##### `projectionInput`<sup>Optional</sup> <a name="projectionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projectionInput"></a>

```typescript
public readonly projectionInput: IResolvable | DynamodbTableLocalSecondaryIndexesProjection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableLocalSecondaryIndexes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>

---


### DynamodbTableLocalSecondaryIndexesProjectionOutputReference <a name="DynamodbTableLocalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes">resetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetProjectionType">resetProjectionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonKeyAttributes` <a name="resetNonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes"></a>

```typescript
public resetNonKeyAttributes(): void
```

##### `resetProjectionType` <a name="resetProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetProjectionType"></a>

```typescript
public resetProjectionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput">nonKeyAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput">projectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType">projectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nonKeyAttributesInput`<sup>Optional</sup> <a name="nonKeyAttributesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput"></a>

```typescript
public readonly nonKeyAttributesInput: string[];
```

- *Type:* string[]

---

##### `projectionTypeInput`<sup>Optional</sup> <a name="projectionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput"></a>

```typescript
public readonly projectionTypeInput: string;
```

- *Type:* string

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```typescript
public readonly nonKeyAttributes: string[];
```

- *Type:* string[]

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```typescript
public readonly projectionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableLocalSecondaryIndexesProjection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---


### DynamodbTableOnDemandThroughputOutputReference <a name="DynamodbTableOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableOnDemandThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits">resetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">resetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReadRequestUnits` <a name="resetMaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```typescript
public resetMaxReadRequestUnits(): void
```

##### `resetMaxWriteRequestUnits` <a name="resetMaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```typescript
public resetMaxWriteRequestUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">maxReadRequestUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">maxWriteRequestUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxReadRequestUnitsInput`<sup>Optional</sup> <a name="maxReadRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```typescript
public readonly maxReadRequestUnitsInput: number;
```

- *Type:* number

---

##### `maxWriteRequestUnitsInput`<sup>Optional</sup> <a name="maxWriteRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```typescript
public readonly maxWriteRequestUnitsInput: number;
```

- *Type:* number

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```typescript
public readonly maxReadRequestUnits: number;
```

- *Type:* number

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```typescript
public readonly maxWriteRequestUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableOnDemandThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---


### DynamodbTablePointInTimeRecoverySpecificationOutputReference <a name="DynamodbTablePointInTimeRecoverySpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetPointInTimeRecoveryEnabled">resetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetRecoveryPeriodInDays">resetRecoveryPeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPointInTimeRecoveryEnabled` <a name="resetPointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```typescript
public resetPointInTimeRecoveryEnabled(): void
```

##### `resetRecoveryPeriodInDays` <a name="resetRecoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetRecoveryPeriodInDays"></a>

```typescript
public resetRecoveryPeriodInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabledInput">pointInTimeRecoveryEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDaysInput">recoveryPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays">recoveryPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```typescript
public readonly pointInTimeRecoveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recoveryPeriodInDaysInput`<sup>Optional</sup> <a name="recoveryPeriodInDaysInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDaysInput"></a>

```typescript
public readonly recoveryPeriodInDaysInput: number;
```

- *Type:* number

---

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```typescript
public readonly pointInTimeRecoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recoveryPeriodInDays`<sup>Required</sup> <a name="recoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays"></a>

```typescript
public readonly recoveryPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTablePointInTimeRecoverySpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---


### DynamodbTableProvisionedThroughputOutputReference <a name="DynamodbTableProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableProvisionedThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetReadCapacityUnits">resetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetWriteCapacityUnits">resetWriteCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadCapacityUnits` <a name="resetReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```typescript
public resetReadCapacityUnits(): void
```

##### `resetWriteCapacityUnits` <a name="resetWriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```typescript
public resetWriteCapacityUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnitsInput">readCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">writeCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readCapacityUnitsInput`<sup>Optional</sup> <a name="readCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```typescript
public readonly readCapacityUnitsInput: number;
```

- *Type:* number

---

##### `writeCapacityUnitsInput`<sup>Optional</sup> <a name="writeCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```typescript
public readonly writeCapacityUnitsInput: number;
```

- *Type:* number

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```typescript
public readonly writeCapacityUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableProvisionedThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---


### DynamodbTableResourcePolicyOutputReference <a name="DynamodbTableResourcePolicyOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableResourcePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableResourcePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---


### DynamodbTableSseSpecificationOutputReference <a name="DynamodbTableSseSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableSseSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseEnabled">resetSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseType">resetSseType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetKmsMasterKeyId"></a>

```typescript
public resetKmsMasterKeyId(): void
```

##### `resetSseEnabled` <a name="resetSseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseEnabled"></a>

```typescript
public resetSseEnabled(): void
```

##### `resetSseType` <a name="resetSseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseType"></a>

```typescript
public resetSseType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabledInput">sseEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseTypeInput">sseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabled">sseEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseType">sseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyIdInput"></a>

```typescript
public readonly kmsMasterKeyIdInput: string;
```

- *Type:* string

---

##### `sseEnabledInput`<sup>Optional</sup> <a name="sseEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabledInput"></a>

```typescript
public readonly sseEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sseTypeInput`<sup>Optional</sup> <a name="sseTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseTypeInput"></a>

```typescript
public readonly sseTypeInput: string;
```

- *Type:* string

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `sseEnabled`<sup>Required</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabled"></a>

```typescript
public readonly sseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sseType`<sup>Required</sup> <a name="sseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseType"></a>

```typescript
public readonly sseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---


### DynamodbTableStreamSpecificationOutputReference <a name="DynamodbTableStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableStreamSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy">putResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetResourcePolicy">resetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetStreamViewType">resetStreamViewType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourcePolicy` <a name="putResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy"></a>

```typescript
public putResourcePolicy(value: DynamodbTableStreamSpecificationResourcePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---

##### `resetResourcePolicy` <a name="resetResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetResourcePolicy"></a>

```typescript
public resetResourcePolicy(): void
```

##### `resetStreamViewType` <a name="resetStreamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetStreamViewType"></a>

```typescript
public resetStreamViewType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference">DynamodbTableStreamSpecificationResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicyInput">resourcePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewTypeInput">streamViewTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewType">streamViewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: DynamodbTableStreamSpecificationResourcePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference">DynamodbTableStreamSpecificationResourcePolicyOutputReference</a>

---

##### `resourcePolicyInput`<sup>Optional</sup> <a name="resourcePolicyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicyInput"></a>

```typescript
public readonly resourcePolicyInput: IResolvable | DynamodbTableStreamSpecificationResourcePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---

##### `streamViewTypeInput`<sup>Optional</sup> <a name="streamViewTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewTypeInput"></a>

```typescript
public readonly streamViewTypeInput: string;
```

- *Type:* string

---

##### `streamViewType`<sup>Required</sup> <a name="streamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewType"></a>

```typescript
public readonly streamViewType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableStreamSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---


### DynamodbTableStreamSpecificationResourcePolicyOutputReference <a name="DynamodbTableStreamSpecificationResourcePolicyOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableStreamSpecificationResourcePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---


### DynamodbTableTagsList <a name="DynamodbTableTagsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get"></a>

```typescript
public get(index: number): DynamodbTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>[]

---


### DynamodbTableTagsOutputReference <a name="DynamodbTableTagsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>

---


### DynamodbTableTimeToLiveSpecificationOutputReference <a name="DynamodbTableTimeToLiveSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetAttributeName"></a>

```typescript
public resetAttributeName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableTimeToLiveSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---


### DynamodbTableWarmThroughputOutputReference <a name="DynamodbTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbTable } from '@cdktn/provider-awscc'

new dynamodbTable.DynamodbTableWarmThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetReadUnitsPerSecond">resetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetWriteUnitsPerSecond">resetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadUnitsPerSecond` <a name="resetReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```typescript
public resetReadUnitsPerSecond(): void
```

##### `resetWriteUnitsPerSecond` <a name="resetWriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```typescript
public resetWriteUnitsPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecondInput">readUnitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput">writeUnitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readUnitsPerSecondInput`<sup>Optional</sup> <a name="readUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```typescript
public readonly readUnitsPerSecondInput: number;
```

- *Type:* number

---

##### `writeUnitsPerSecondInput`<sup>Optional</sup> <a name="writeUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```typescript
public readonly writeUnitsPerSecondInput: number;
```

- *Type:* number

---

##### `readUnitsPerSecond`<sup>Required</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```typescript
public readonly readUnitsPerSecond: number;
```

- *Type:* number

---

##### `writeUnitsPerSecond`<sup>Required</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```typescript
public readonly writeUnitsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbTableWarmThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---



