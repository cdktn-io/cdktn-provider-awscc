# `iotfleetwiseCampaign` Submodule <a name="`iotfleetwiseCampaign` Submodule" id="@cdktn/provider-awscc.iotfleetwiseCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseCampaign <a name="IotfleetwiseCampaign" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign awscc_iotfleetwise_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaign(scope: Construct, id: string, config: IotfleetwiseCampaignConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig">IotfleetwiseCampaignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig">IotfleetwiseCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme">putCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs">putDataDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions">putDataPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect">putSignalsToCollect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch">putSignalsToFetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs">resetDataDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions">resetDataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions">resetDataPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode">resetDiagnosticsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime">resetExpiryTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration">resetPostTriggerCollectionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect">resetSignalsToCollect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch">resetSignalsToFetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode">resetSpoolingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCollectionScheme` <a name="putCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme"></a>

```typescript
public putCollectionScheme(value: IotfleetwiseCampaignCollectionScheme): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---

##### `putDataDestinationConfigs` <a name="putDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs"></a>

```typescript
public putDataDestinationConfigs(value: IResolvable | IotfleetwiseCampaignDataDestinationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]

---

##### `putDataPartitions` <a name="putDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions"></a>

```typescript
public putDataPartitions(value: IResolvable | IotfleetwiseCampaignDataPartitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]

---

##### `putSignalsToCollect` <a name="putSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect"></a>

```typescript
public putSignalsToCollect(value: IResolvable | IotfleetwiseCampaignSignalsToCollect[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]

---

##### `putSignalsToFetch` <a name="putSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch"></a>

```typescript
public putSignalsToFetch(value: IResolvable | IotfleetwiseCampaignSignalsToFetch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags"></a>

```typescript
public putTags(value: IResolvable | IotfleetwiseCampaignTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDataDestinationConfigs` <a name="resetDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs"></a>

```typescript
public resetDataDestinationConfigs(): void
```

##### `resetDataExtraDimensions` <a name="resetDataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions"></a>

```typescript
public resetDataExtraDimensions(): void
```

##### `resetDataPartitions` <a name="resetDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions"></a>

```typescript
public resetDataPartitions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiagnosticsMode` <a name="resetDiagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode"></a>

```typescript
public resetDiagnosticsMode(): void
```

##### `resetExpiryTime` <a name="resetExpiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime"></a>

```typescript
public resetExpiryTime(): void
```

##### `resetPostTriggerCollectionDuration` <a name="resetPostTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration"></a>

```typescript
public resetPostTriggerCollectionDuration(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetSignalsToCollect` <a name="resetSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect"></a>

```typescript
public resetSignalsToCollect(): void
```

##### `resetSignalsToFetch` <a name="resetSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch"></a>

```typescript
public resetSignalsToFetch(): void
```

##### `resetSpoolingMode` <a name="resetSpoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode"></a>

```typescript
public resetSpoolingMode(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotfleetwiseCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotfleetwiseCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme">collectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs">dataDestinationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions">dataPartitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime">lastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect">signalsToCollect</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch">signalsToFetch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput">collectionSchemeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput">dataDestinationConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput">dataExtraDimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput">dataPartitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput">diagnosticsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput">expiryTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput">postTriggerCollectionDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput">signalCatalogArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput">signalsToCollectInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput">signalsToFetchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput">spoolingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput">targetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions">dataExtraDimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode">diagnosticsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime">expiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration">postTriggerCollectionDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn">signalCatalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode">spoolingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `collectionScheme`<sup>Required</sup> <a name="collectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme"></a>

```typescript
public readonly collectionScheme: IotfleetwiseCampaignCollectionSchemeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `dataDestinationConfigs`<sup>Required</sup> <a name="dataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs"></a>

```typescript
public readonly dataDestinationConfigs: IotfleetwiseCampaignDataDestinationConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a>

---

##### `dataPartitions`<sup>Required</sup> <a name="dataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions"></a>

```typescript
public readonly dataPartitions: IotfleetwiseCampaignDataPartitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationTime`<sup>Required</sup> <a name="lastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime"></a>

```typescript
public readonly lastModificationTime: string;
```

- *Type:* string

---

##### `signalsToCollect`<sup>Required</sup> <a name="signalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect"></a>

```typescript
public readonly signalsToCollect: IotfleetwiseCampaignSignalsToCollectList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a>

---

##### `signalsToFetch`<sup>Required</sup> <a name="signalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch"></a>

```typescript
public readonly signalsToFetch: IotfleetwiseCampaignSignalsToFetchList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags"></a>

```typescript
public readonly tags: IotfleetwiseCampaignTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `collectionSchemeInput`<sup>Optional</sup> <a name="collectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput"></a>

```typescript
public readonly collectionSchemeInput: IResolvable | IotfleetwiseCampaignCollectionScheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `dataDestinationConfigsInput`<sup>Optional</sup> <a name="dataDestinationConfigsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput"></a>

```typescript
public readonly dataDestinationConfigsInput: IResolvable | IotfleetwiseCampaignDataDestinationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]

---

##### `dataExtraDimensionsInput`<sup>Optional</sup> <a name="dataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput"></a>

```typescript
public readonly dataExtraDimensionsInput: string[];
```

- *Type:* string[]

---

##### `dataPartitionsInput`<sup>Optional</sup> <a name="dataPartitionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput"></a>

```typescript
public readonly dataPartitionsInput: IResolvable | IotfleetwiseCampaignDataPartitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diagnosticsModeInput`<sup>Optional</sup> <a name="diagnosticsModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput"></a>

```typescript
public readonly diagnosticsModeInput: string;
```

- *Type:* string

---

##### `expiryTimeInput`<sup>Optional</sup> <a name="expiryTimeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput"></a>

```typescript
public readonly expiryTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `postTriggerCollectionDurationInput`<sup>Optional</sup> <a name="postTriggerCollectionDurationInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput"></a>

```typescript
public readonly postTriggerCollectionDurationInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `signalCatalogArnInput`<sup>Optional</sup> <a name="signalCatalogArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput"></a>

```typescript
public readonly signalCatalogArnInput: string;
```

- *Type:* string

---

##### `signalsToCollectInput`<sup>Optional</sup> <a name="signalsToCollectInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput"></a>

```typescript
public readonly signalsToCollectInput: IResolvable | IotfleetwiseCampaignSignalsToCollect[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]

---

##### `signalsToFetchInput`<sup>Optional</sup> <a name="signalsToFetchInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput"></a>

```typescript
public readonly signalsToFetchInput: IResolvable | IotfleetwiseCampaignSignalsToFetch[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]

---

##### `spoolingModeInput`<sup>Optional</sup> <a name="spoolingModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput"></a>

```typescript
public readonly spoolingModeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotfleetwiseCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput"></a>

```typescript
public readonly targetArnInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dataExtraDimensions`<sup>Required</sup> <a name="dataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions"></a>

```typescript
public readonly dataExtraDimensions: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diagnosticsMode`<sup>Required</sup> <a name="diagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode"></a>

```typescript
public readonly diagnosticsMode: string;
```

- *Type:* string

---

##### `expiryTime`<sup>Required</sup> <a name="expiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime"></a>

```typescript
public readonly expiryTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `postTriggerCollectionDuration`<sup>Required</sup> <a name="postTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration"></a>

```typescript
public readonly postTriggerCollectionDuration: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `signalCatalogArn`<sup>Required</sup> <a name="signalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn"></a>

```typescript
public readonly signalCatalogArn: string;
```

- *Type:* string

---

##### `spoolingMode`<sup>Required</sup> <a name="spoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode"></a>

```typescript
public readonly spoolingMode: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseCampaignCollectionScheme <a name="IotfleetwiseCampaignCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignCollectionScheme: iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme">conditionBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme">timeBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}. |

---

##### `conditionBasedCollectionScheme`<sup>Optional</sup> <a name="conditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme"></a>

```typescript
public readonly conditionBasedCollectionScheme: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}.

---

##### `timeBasedCollectionScheme`<sup>Optional</sup> <a name="timeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme"></a>

```typescript
public readonly timeBasedCollectionScheme: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}.

---

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme: iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs">minimumTriggerIntervalMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode">triggerMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `conditionLanguageVersion`<sup>Optional</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion"></a>

```typescript
public readonly conditionLanguageVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

##### `minimumTriggerIntervalMs`<sup>Optional</sup> <a name="minimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs"></a>

```typescript
public readonly minimumTriggerIntervalMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}.

---

##### `triggerMode`<sup>Optional</sup> <a name="triggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme: iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs">periodMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}. |

---

##### `periodMs`<sup>Optional</sup> <a name="periodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs"></a>

```typescript
public readonly periodMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}.

---

### IotfleetwiseCampaignConfig <a name="IotfleetwiseCampaignConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignConfig: iotfleetwiseCampaign.IotfleetwiseCampaignConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme">collectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn">signalCatalogArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn">targetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression">compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs">dataDestinationConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions">dataExtraDimensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions">dataPartitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode">diagnosticsMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime">expiryTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration">postTriggerCollectionDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect">signalsToCollect</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch">signalsToFetch</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode">spoolingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionScheme`<sup>Required</sup> <a name="collectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme"></a>

```typescript
public readonly collectionScheme: IotfleetwiseCampaignCollectionScheme;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

##### `signalCatalogArn`<sup>Required</sup> <a name="signalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn"></a>

```typescript
public readonly signalCatalogArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}.

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}.

---

##### `dataDestinationConfigs`<sup>Optional</sup> <a name="dataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs"></a>

```typescript
public readonly dataDestinationConfigs: IResolvable | IotfleetwiseCampaignDataDestinationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}.

---

##### `dataExtraDimensions`<sup>Optional</sup> <a name="dataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions"></a>

```typescript
public readonly dataExtraDimensions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}.

---

##### `dataPartitions`<sup>Optional</sup> <a name="dataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions"></a>

```typescript
public readonly dataPartitions: IResolvable | IotfleetwiseCampaignDataPartitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}.

---

##### `diagnosticsMode`<sup>Optional</sup> <a name="diagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode"></a>

```typescript
public readonly diagnosticsMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}.

---

##### `expiryTime`<sup>Optional</sup> <a name="expiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime"></a>

```typescript
public readonly expiryTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}.

---

##### `postTriggerCollectionDuration`<sup>Optional</sup> <a name="postTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration"></a>

```typescript
public readonly postTriggerCollectionDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}.

---

##### `signalsToCollect`<sup>Optional</sup> <a name="signalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect"></a>

```typescript
public readonly signalsToCollect: IResolvable | IotfleetwiseCampaignSignalsToCollect[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}.

---

##### `signalsToFetch`<sup>Optional</sup> <a name="signalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch"></a>

```typescript
public readonly signalsToFetch: IResolvable | IotfleetwiseCampaignSignalsToFetch[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}.

---

##### `spoolingMode`<sup>Optional</sup> <a name="spoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode"></a>

```typescript
public readonly spoolingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotfleetwiseCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}.

---

### IotfleetwiseCampaignDataDestinationConfigs <a name="IotfleetwiseCampaignDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataDestinationConfigs: iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig">mqttTopicConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig">timestreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}. |

---

##### `mqttTopicConfig`<sup>Optional</sup> <a name="mqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig"></a>

```typescript
public readonly mqttTopicConfig: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}.

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config"></a>

```typescript
public readonly s3Config: IotfleetwiseCampaignDataDestinationConfigsS3Config;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}.

---

##### `timestreamConfig`<sup>Optional</sup> <a name="timestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig"></a>

```typescript
public readonly timestreamConfig: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}.

---

### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig: iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn">mqttTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}. |

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `mqttTopicArn`<sup>Optional</sup> <a name="mqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn"></a>

```typescript
public readonly mqttTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}.

---

### IotfleetwiseCampaignDataDestinationConfigsS3Config <a name="IotfleetwiseCampaignDataDestinationConfigsS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataDestinationConfigsS3Config: iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn">bucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat">storageCompressionFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}.

---

##### `storageCompressionFormat`<sup>Optional</sup> <a name="storageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat"></a>

```typescript
public readonly storageCompressionFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}.

---

### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataDestinationConfigsTimestreamConfig: iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn">timestreamTableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}. |

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `timestreamTableArn`<sup>Optional</sup> <a name="timestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn"></a>

```typescript
public readonly timestreamTableArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}.

---

### IotfleetwiseCampaignDataPartitions <a name="IotfleetwiseCampaignDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataPartitions: iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions">storageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions">uploadOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageOptions`<sup>Optional</sup> <a name="storageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions"></a>

```typescript
public readonly storageOptions: IotfleetwiseCampaignDataPartitionsStorageOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}.

---

##### `uploadOptions`<sup>Optional</sup> <a name="uploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions"></a>

```typescript
public readonly uploadOptions: IotfleetwiseCampaignDataPartitionsUploadOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptions <a name="IotfleetwiseCampaignDataPartitionsStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataPartitionsStorageOptions: iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize">maximumSize</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive">minimumTimeToLive</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation">storageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}. |

---

##### `maximumSize`<sup>Optional</sup> <a name="maximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize"></a>

```typescript
public readonly maximumSize: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}.

---

##### `minimumTimeToLive`<sup>Optional</sup> <a name="minimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive"></a>

```typescript
public readonly minimumTimeToLive: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize: iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive: iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsUploadOptions <a name="IotfleetwiseCampaignDataPartitionsUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignDataPartitionsUploadOptions: iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |

---

##### `conditionLanguageVersion`<sup>Optional</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion"></a>

```typescript
public readonly conditionLanguageVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

### IotfleetwiseCampaignSignalsToCollect <a name="IotfleetwiseCampaignSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignSignalsToCollect: iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId">dataPartitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount">maxSampleCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs">minimumSamplingIntervalMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |

---

##### `dataPartitionId`<sup>Optional</sup> <a name="dataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId"></a>

```typescript
public readonly dataPartitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}.

---

##### `maxSampleCount`<sup>Optional</sup> <a name="maxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount"></a>

```typescript
public readonly maxSampleCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}.

---

##### `minimumSamplingIntervalMs`<sup>Optional</sup> <a name="minimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs"></a>

```typescript
public readonly minimumSamplingIntervalMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

### IotfleetwiseCampaignSignalsToFetch <a name="IotfleetwiseCampaignSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignSignalsToFetch: iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig">signalFetchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}.

---

##### `conditionLanguageVersion`<sup>Optional</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion"></a>

```typescript
public readonly conditionLanguageVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}.

---

##### `signalFetchConfig`<sup>Optional</sup> <a name="signalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig"></a>

```typescript
public readonly signalFetchConfig: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfig <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignSignalsToFetchSignalFetchConfig: iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased">conditionBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased">timeBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}. |

---

##### `conditionBased`<sup>Optional</sup> <a name="conditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased"></a>

```typescript
public readonly conditionBased: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}.

---

##### `timeBased`<sup>Optional</sup> <a name="timeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased"></a>

```typescript
public readonly timeBased: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased: iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression">conditionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode">triggerMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `conditionExpression`<sup>Optional</sup> <a name="conditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression"></a>

```typescript
public readonly conditionExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}.

---

##### `triggerMode`<sup>Optional</sup> <a name="triggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased: iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs">executionFrequencyMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}. |

---

##### `executionFrequencyMs`<sup>Optional</sup> <a name="executionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs"></a>

```typescript
public readonly executionFrequencyMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}.

---

### IotfleetwiseCampaignTags <a name="IotfleetwiseCampaignTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

const iotfleetwiseCampaignTags: iotfleetwiseCampaign.IotfleetwiseCampaignTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion">resetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs">resetMinimumTriggerIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode">resetTriggerMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionLanguageVersion` <a name="resetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion"></a>

```typescript
public resetConditionLanguageVersion(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetMinimumTriggerIntervalMs` <a name="resetMinimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs"></a>

```typescript
public resetMinimumTriggerIntervalMs(): void
```

##### `resetTriggerMode` <a name="resetTriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode"></a>

```typescript
public resetTriggerMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput">conditionLanguageVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput">minimumTriggerIntervalMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput">triggerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs">minimumTriggerIntervalMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode">triggerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionLanguageVersionInput`<sup>Optional</sup> <a name="conditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput"></a>

```typescript
public readonly conditionLanguageVersionInput: number;
```

- *Type:* number

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `minimumTriggerIntervalMsInput`<sup>Optional</sup> <a name="minimumTriggerIntervalMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput"></a>

```typescript
public readonly minimumTriggerIntervalMsInput: number;
```

- *Type:* number

---

##### `triggerModeInput`<sup>Optional</sup> <a name="triggerModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput"></a>

```typescript
public readonly triggerModeInput: string;
```

- *Type:* string

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion"></a>

```typescript
public readonly conditionLanguageVersion: number;
```

- *Type:* number

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `minimumTriggerIntervalMs`<sup>Required</sup> <a name="minimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs"></a>

```typescript
public readonly minimumTriggerIntervalMs: number;
```

- *Type:* number

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---


### IotfleetwiseCampaignCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme">putConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme">putTimeBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme">resetConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme">resetTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionBasedCollectionScheme` <a name="putConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme"></a>

```typescript
public putConditionBasedCollectionScheme(value: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---

##### `putTimeBasedCollectionScheme` <a name="putTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme"></a>

```typescript
public putTimeBasedCollectionScheme(value: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---

##### `resetConditionBasedCollectionScheme` <a name="resetConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme"></a>

```typescript
public resetConditionBasedCollectionScheme(): void
```

##### `resetTimeBasedCollectionScheme` <a name="resetTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme"></a>

```typescript
public resetTimeBasedCollectionScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme">conditionBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme">timeBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput">conditionBasedCollectionSchemeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput">timeBasedCollectionSchemeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionBasedCollectionScheme`<sup>Required</sup> <a name="conditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme"></a>

```typescript
public readonly conditionBasedCollectionScheme: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a>

---

##### `timeBasedCollectionScheme`<sup>Required</sup> <a name="timeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme"></a>

```typescript
public readonly timeBasedCollectionScheme: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a>

---

##### `conditionBasedCollectionSchemeInput`<sup>Optional</sup> <a name="conditionBasedCollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput"></a>

```typescript
public readonly conditionBasedCollectionSchemeInput: IResolvable | IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---

##### `timeBasedCollectionSchemeInput`<sup>Optional</sup> <a name="timeBasedCollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput"></a>

```typescript
public readonly timeBasedCollectionSchemeInput: IResolvable | IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignCollectionScheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---


### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs">resetPeriodMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriodMs` <a name="resetPeriodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs"></a>

```typescript
public resetPeriodMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput">periodMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs">periodMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodMsInput`<sup>Optional</sup> <a name="periodMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput"></a>

```typescript
public readonly periodMsInput: number;
```

- *Type:* number

---

##### `periodMs`<sup>Required</sup> <a name="periodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs"></a>

```typescript
public readonly periodMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---


### IotfleetwiseCampaignDataDestinationConfigsList <a name="IotfleetwiseCampaignDataDestinationConfigsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get"></a>

```typescript
public get(index: number): IotfleetwiseCampaignDataDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataDestinationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]

---


### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn">resetMqttTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetMqttTopicArn` <a name="resetMqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn"></a>

```typescript
public resetMqttTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput">mqttTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn">mqttTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `mqttTopicArnInput`<sup>Optional</sup> <a name="mqttTopicArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput"></a>

```typescript
public readonly mqttTopicArnInput: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `mqttTopicArn`<sup>Required</sup> <a name="mqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn"></a>

```typescript
public readonly mqttTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---


### IotfleetwiseCampaignDataDestinationConfigsOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig">putMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config">putS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig">putTimestreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig">resetMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config">resetS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig">resetTimestreamConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMqttTopicConfig` <a name="putMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig"></a>

```typescript
public putMqttTopicConfig(value: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---

##### `putS3Config` <a name="putS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config"></a>

```typescript
public putS3Config(value: IotfleetwiseCampaignDataDestinationConfigsS3Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---

##### `putTimestreamConfig` <a name="putTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig"></a>

```typescript
public putTimestreamConfig(value: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---

##### `resetMqttTopicConfig` <a name="resetMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig"></a>

```typescript
public resetMqttTopicConfig(): void
```

##### `resetS3Config` <a name="resetS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config"></a>

```typescript
public resetS3Config(): void
```

##### `resetTimestreamConfig` <a name="resetTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig"></a>

```typescript
public resetTimestreamConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig">mqttTopicConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig">timestreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput">mqttTopicConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput">s3ConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput">timestreamConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mqttTopicConfig`<sup>Required</sup> <a name="mqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig"></a>

```typescript
public readonly mqttTopicConfig: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a>

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config"></a>

```typescript
public readonly s3Config: IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a>

---

##### `timestreamConfig`<sup>Required</sup> <a name="timestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig"></a>

```typescript
public readonly timestreamConfig: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a>

---

##### `mqttTopicConfigInput`<sup>Optional</sup> <a name="mqttTopicConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput"></a>

```typescript
public readonly mqttTopicConfigInput: IResolvable | IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---

##### `s3ConfigInput`<sup>Optional</sup> <a name="s3ConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput"></a>

```typescript
public readonly s3ConfigInput: IResolvable | IotfleetwiseCampaignDataDestinationConfigsS3Config;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---

##### `timestreamConfigInput`<sup>Optional</sup> <a name="timestreamConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput"></a>

```typescript
public readonly timestreamConfigInput: IResolvable | IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataDestinationConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>

---


### IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat">resetStorageCompressionFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat"></a>

```typescript
public resetDataFormat(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetStorageCompressionFormat` <a name="resetStorageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat"></a>

```typescript
public resetStorageCompressionFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput">storageCompressionFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat">storageCompressionFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `storageCompressionFormatInput`<sup>Optional</sup> <a name="storageCompressionFormatInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput"></a>

```typescript
public readonly storageCompressionFormatInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `storageCompressionFormat`<sup>Required</sup> <a name="storageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat"></a>

```typescript
public readonly storageCompressionFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataDestinationConfigsS3Config;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---


### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn">resetTimestreamTableArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetTimestreamTableArn` <a name="resetTimestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn"></a>

```typescript
public resetTimestreamTableArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput">timestreamTableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn">timestreamTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `timestreamTableArnInput`<sup>Optional</sup> <a name="timestreamTableArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput"></a>

```typescript
public readonly timestreamTableArnInput: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `timestreamTableArn`<sup>Required</sup> <a name="timestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn"></a>

```typescript
public readonly timestreamTableArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---


### IotfleetwiseCampaignDataPartitionsList <a name="IotfleetwiseCampaignDataPartitionsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get"></a>

```typescript
public get(index: number): IotfleetwiseCampaignDataPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataPartitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]

---


### IotfleetwiseCampaignDataPartitionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions">putStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions">putUploadOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions">resetStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions">resetUploadOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageOptions` <a name="putStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions"></a>

```typescript
public putStorageOptions(value: IotfleetwiseCampaignDataPartitionsStorageOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---

##### `putUploadOptions` <a name="putUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions"></a>

```typescript
public putUploadOptions(value: IotfleetwiseCampaignDataPartitionsUploadOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStorageOptions` <a name="resetStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions"></a>

```typescript
public resetStorageOptions(): void
```

##### `resetUploadOptions` <a name="resetUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions"></a>

```typescript
public resetUploadOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions">storageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions">uploadOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput">storageOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput">uploadOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageOptions`<sup>Required</sup> <a name="storageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions"></a>

```typescript
public readonly storageOptions: IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a>

---

##### `uploadOptions`<sup>Required</sup> <a name="uploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions"></a>

```typescript
public readonly uploadOptions: IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `storageOptionsInput`<sup>Optional</sup> <a name="storageOptionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput"></a>

```typescript
public readonly storageOptionsInput: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---

##### `uploadOptionsInput`<sup>Optional</sup> <a name="uploadOptionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput"></a>

```typescript
public readonly uploadOptionsInput: IResolvable | IotfleetwiseCampaignDataPartitionsUploadOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataPartitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize">putMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive">putMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize">resetMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive">resetMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaximumSize` <a name="putMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize"></a>

```typescript
public putMaximumSize(value: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---

##### `putMinimumTimeToLive` <a name="putMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive"></a>

```typescript
public putMinimumTimeToLive(value: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---

##### `resetMaximumSize` <a name="resetMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize"></a>

```typescript
public resetMaximumSize(): void
```

##### `resetMinimumTimeToLive` <a name="resetMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive"></a>

```typescript
public resetMinimumTimeToLive(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize">maximumSize</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive">minimumTimeToLive</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput">maximumSizeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput">minimumTimeToLiveInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize"></a>

```typescript
public readonly maximumSize: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a>

---

##### `minimumTimeToLive`<sup>Required</sup> <a name="minimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive"></a>

```typescript
public readonly minimumTimeToLive: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a>

---

##### `maximumSizeInput`<sup>Optional</sup> <a name="maximumSizeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput"></a>

```typescript
public readonly maximumSizeInput: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---

##### `minimumTimeToLiveInput`<sup>Optional</sup> <a name="minimumTimeToLiveInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput"></a>

```typescript
public readonly minimumTimeToLiveInput: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---


### IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion">resetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionLanguageVersion` <a name="resetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion"></a>

```typescript
public resetConditionLanguageVersion(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput">conditionLanguageVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionLanguageVersionInput`<sup>Optional</sup> <a name="conditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput"></a>

```typescript
public readonly conditionLanguageVersionInput: number;
```

- *Type:* number

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion"></a>

```typescript
public readonly conditionLanguageVersion: number;
```

- *Type:* number

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignDataPartitionsUploadOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---


### IotfleetwiseCampaignSignalsToCollectList <a name="IotfleetwiseCampaignSignalsToCollectList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get"></a>

```typescript
public get(index: number): IotfleetwiseCampaignSignalsToCollectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignSignalsToCollect[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]

---


### IotfleetwiseCampaignSignalsToCollectOutputReference <a name="IotfleetwiseCampaignSignalsToCollectOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId">resetDataPartitionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount">resetMaxSampleCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs">resetMinimumSamplingIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataPartitionId` <a name="resetDataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId"></a>

```typescript
public resetDataPartitionId(): void
```

##### `resetMaxSampleCount` <a name="resetMaxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount"></a>

```typescript
public resetMaxSampleCount(): void
```

##### `resetMinimumSamplingIntervalMs` <a name="resetMinimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs"></a>

```typescript
public resetMinimumSamplingIntervalMs(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput">dataPartitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput">maxSampleCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput">minimumSamplingIntervalMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId">dataPartitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount">maxSampleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs">minimumSamplingIntervalMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataPartitionIdInput`<sup>Optional</sup> <a name="dataPartitionIdInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput"></a>

```typescript
public readonly dataPartitionIdInput: string;
```

- *Type:* string

---

##### `maxSampleCountInput`<sup>Optional</sup> <a name="maxSampleCountInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput"></a>

```typescript
public readonly maxSampleCountInput: number;
```

- *Type:* number

---

##### `minimumSamplingIntervalMsInput`<sup>Optional</sup> <a name="minimumSamplingIntervalMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput"></a>

```typescript
public readonly minimumSamplingIntervalMsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dataPartitionId`<sup>Required</sup> <a name="dataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId"></a>

```typescript
public readonly dataPartitionId: string;
```

- *Type:* string

---

##### `maxSampleCount`<sup>Required</sup> <a name="maxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount"></a>

```typescript
public readonly maxSampleCount: number;
```

- *Type:* number

---

##### `minimumSamplingIntervalMs`<sup>Required</sup> <a name="minimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs"></a>

```typescript
public readonly minimumSamplingIntervalMs: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignSignalsToCollect;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>

---


### IotfleetwiseCampaignSignalsToFetchList <a name="IotfleetwiseCampaignSignalsToFetchList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get"></a>

```typescript
public get(index: number): IotfleetwiseCampaignSignalsToFetchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignSignalsToFetch[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]

---


### IotfleetwiseCampaignSignalsToFetchOutputReference <a name="IotfleetwiseCampaignSignalsToFetchOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig">putSignalFetchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion">resetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName">resetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig">resetSignalFetchConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignalFetchConfig` <a name="putSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig"></a>

```typescript
public putSignalFetchConfig(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetConditionLanguageVersion` <a name="resetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion"></a>

```typescript
public resetConditionLanguageVersion(): void
```

##### `resetFullyQualifiedName` <a name="resetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName"></a>

```typescript
public resetFullyQualifiedName(): void
```

##### `resetSignalFetchConfig` <a name="resetSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig"></a>

```typescript
public resetSignalFetchConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig">signalFetchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput">conditionLanguageVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput">fullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput">signalFetchConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signalFetchConfig`<sup>Required</sup> <a name="signalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig"></a>

```typescript
public readonly signalFetchConfig: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `conditionLanguageVersionInput`<sup>Optional</sup> <a name="conditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput"></a>

```typescript
public readonly conditionLanguageVersionInput: number;
```

- *Type:* number

---

##### `fullyQualifiedNameInput`<sup>Optional</sup> <a name="fullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput"></a>

```typescript
public readonly fullyQualifiedNameInput: string;
```

- *Type:* string

---

##### `signalFetchConfigInput`<sup>Optional</sup> <a name="signalFetchConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput"></a>

```typescript
public readonly signalFetchConfigInput: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion"></a>

```typescript
public readonly conditionLanguageVersion: number;
```

- *Type:* number

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignSignalsToFetch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression">resetConditionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode">resetTriggerMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionExpression` <a name="resetConditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression"></a>

```typescript
public resetConditionExpression(): void
```

##### `resetTriggerMode` <a name="resetTriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode"></a>

```typescript
public resetTriggerMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput">conditionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput">triggerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression">conditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode">triggerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionExpressionInput`<sup>Optional</sup> <a name="conditionExpressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput"></a>

```typescript
public readonly conditionExpressionInput: string;
```

- *Type:* string

---

##### `triggerModeInput`<sup>Optional</sup> <a name="triggerModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput"></a>

```typescript
public readonly triggerModeInput: string;
```

- *Type:* string

---

##### `conditionExpression`<sup>Required</sup> <a name="conditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression"></a>

```typescript
public readonly conditionExpression: string;
```

- *Type:* string

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased">putConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased">putTimeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased">resetConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased">resetTimeBased</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionBased` <a name="putConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased"></a>

```typescript
public putConditionBased(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---

##### `putTimeBased` <a name="putTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased"></a>

```typescript
public putTimeBased(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---

##### `resetConditionBased` <a name="resetConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased"></a>

```typescript
public resetConditionBased(): void
```

##### `resetTimeBased` <a name="resetTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased"></a>

```typescript
public resetTimeBased(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased">conditionBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased">timeBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput">conditionBasedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput">timeBasedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionBased`<sup>Required</sup> <a name="conditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased"></a>

```typescript
public readonly conditionBased: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a>

---

##### `timeBased`<sup>Required</sup> <a name="timeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased"></a>

```typescript
public readonly timeBased: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a>

---

##### `conditionBasedInput`<sup>Optional</sup> <a name="conditionBasedInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput"></a>

```typescript
public readonly conditionBasedInput: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---

##### `timeBasedInput`<sup>Optional</sup> <a name="timeBasedInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput"></a>

```typescript
public readonly timeBasedInput: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs">resetExecutionFrequencyMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionFrequencyMs` <a name="resetExecutionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs"></a>

```typescript
public resetExecutionFrequencyMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput">executionFrequencyMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs">executionFrequencyMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionFrequencyMsInput`<sup>Optional</sup> <a name="executionFrequencyMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput"></a>

```typescript
public readonly executionFrequencyMsInput: number;
```

- *Type:* number

---

##### `executionFrequencyMs`<sup>Required</sup> <a name="executionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs"></a>

```typescript
public readonly executionFrequencyMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---


### IotfleetwiseCampaignTagsList <a name="IotfleetwiseCampaignTagsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get"></a>

```typescript
public get(index: number): IotfleetwiseCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]

---


### IotfleetwiseCampaignTagsOutputReference <a name="IotfleetwiseCampaignTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseCampaign } from '@cdktn/provider-awscc'

new iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseCampaignTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>

---



