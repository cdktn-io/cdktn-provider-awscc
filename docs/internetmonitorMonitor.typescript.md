# `internetmonitorMonitor` Submodule <a name="`internetmonitorMonitor` Submodule" id="@cdktn/provider-awscc.internetmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InternetmonitorMonitor <a name="InternetmonitorMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor awscc_internetmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

new internetmonitorMonitor.InternetmonitorMonitor(scope: Construct, id: string, config: InternetmonitorMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig">putHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery">putInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig">resetHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetIncludeLinkedAccounts">resetIncludeLinkedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery">resetInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetLinkedAccountId">resetLinkedAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor">resetMaxCityNetworksToMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToAdd">resetResourcesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToRemove">resetResourcesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor">resetTrafficPercentageToMonitor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthEventsConfig` <a name="putHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig"></a>

```typescript
public putHealthEventsConfig(value: InternetmonitorMonitorHealthEventsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `putInternetMeasurementsLogDelivery` <a name="putInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery"></a>

```typescript
public putInternetMeasurementsLogDelivery(value: InternetmonitorMonitorInternetMeasurementsLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags"></a>

```typescript
public putTags(value: IResolvable | InternetmonitorMonitorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]

---

##### `resetHealthEventsConfig` <a name="resetHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig"></a>

```typescript
public resetHealthEventsConfig(): void
```

##### `resetIncludeLinkedAccounts` <a name="resetIncludeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetIncludeLinkedAccounts"></a>

```typescript
public resetIncludeLinkedAccounts(): void
```

##### `resetInternetMeasurementsLogDelivery` <a name="resetInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery"></a>

```typescript
public resetInternetMeasurementsLogDelivery(): void
```

##### `resetLinkedAccountId` <a name="resetLinkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetLinkedAccountId"></a>

```typescript
public resetLinkedAccountId(): void
```

##### `resetMaxCityNetworksToMonitor` <a name="resetMaxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor"></a>

```typescript
public resetMaxCityNetworksToMonitor(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetResourcesToAdd` <a name="resetResourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToAdd"></a>

```typescript
public resetResourcesToAdd(): void
```

##### `resetResourcesToRemove` <a name="resetResourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToRemove"></a>

```typescript
public resetResourcesToRemove(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrafficPercentageToMonitor` <a name="resetTrafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor"></a>

```typescript
public resetTrafficPercentageToMonitor(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InternetmonitorMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

internetmonitorMonitor.InternetmonitorMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a InternetmonitorMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InternetmonitorMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InternetmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the InternetmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig">healthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery">internetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorArn">monitorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatus">processingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatusInfo">processingStatusInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList">InternetmonitorMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput">healthEventsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccountsInput">includeLinkedAccountsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput">internetMeasurementsLogDeliveryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput">maxCityNetworksToMonitorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput">monitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAddInput">resourcesToAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemoveInput">resourcesToRemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput">trafficPercentageToMonitorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccounts">includeLinkedAccounts</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountId">linkedAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor">maxCityNetworksToMonitor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName">monitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAdd">resourcesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemove">resourcesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor">trafficPercentageToMonitor</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `healthEventsConfig`<sup>Required</sup> <a name="healthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig"></a>

```typescript
public readonly healthEventsConfig: InternetmonitorMonitorHealthEventsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetMeasurementsLogDelivery`<sup>Required</sup> <a name="internetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery"></a>

```typescript
public readonly internetMeasurementsLogDelivery: InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `monitorArn`<sup>Required</sup> <a name="monitorArn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorArn"></a>

```typescript
public readonly monitorArn: string;
```

- *Type:* string

---

##### `processingStatus`<sup>Required</sup> <a name="processingStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatus"></a>

```typescript
public readonly processingStatus: string;
```

- *Type:* string

---

##### `processingStatusInfo`<sup>Required</sup> <a name="processingStatusInfo" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatusInfo"></a>

```typescript
public readonly processingStatusInfo: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tags"></a>

```typescript
public readonly tags: InternetmonitorMonitorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList">InternetmonitorMonitorTagsList</a>

---

##### `healthEventsConfigInput`<sup>Optional</sup> <a name="healthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput"></a>

```typescript
public readonly healthEventsConfigInput: IResolvable | InternetmonitorMonitorHealthEventsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `includeLinkedAccountsInput`<sup>Optional</sup> <a name="includeLinkedAccountsInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccountsInput"></a>

```typescript
public readonly includeLinkedAccountsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internetMeasurementsLogDeliveryInput`<sup>Optional</sup> <a name="internetMeasurementsLogDeliveryInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput"></a>

```typescript
public readonly internetMeasurementsLogDeliveryInput: IResolvable | InternetmonitorMonitorInternetMeasurementsLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountIdInput"></a>

```typescript
public readonly linkedAccountIdInput: string;
```

- *Type:* string

---

##### `maxCityNetworksToMonitorInput`<sup>Optional</sup> <a name="maxCityNetworksToMonitorInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput"></a>

```typescript
public readonly maxCityNetworksToMonitorInput: number;
```

- *Type:* number

---

##### `monitorNameInput`<sup>Optional</sup> <a name="monitorNameInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput"></a>

```typescript
public readonly monitorNameInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resourcesToAddInput`<sup>Optional</sup> <a name="resourcesToAddInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAddInput"></a>

```typescript
public readonly resourcesToAddInput: string[];
```

- *Type:* string[]

---

##### `resourcesToRemoveInput`<sup>Optional</sup> <a name="resourcesToRemoveInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemoveInput"></a>

```typescript
public readonly resourcesToRemoveInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | InternetmonitorMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]

---

##### `trafficPercentageToMonitorInput`<sup>Optional</sup> <a name="trafficPercentageToMonitorInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput"></a>

```typescript
public readonly trafficPercentageToMonitorInput: number;
```

- *Type:* number

---

##### `includeLinkedAccounts`<sup>Required</sup> <a name="includeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccounts"></a>

```typescript
public readonly includeLinkedAccounts: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: string;
```

- *Type:* string

---

##### `maxCityNetworksToMonitor`<sup>Required</sup> <a name="maxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor"></a>

```typescript
public readonly maxCityNetworksToMonitor: number;
```

- *Type:* number

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourcesToAdd`<sup>Required</sup> <a name="resourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAdd"></a>

```typescript
public readonly resourcesToAdd: string[];
```

- *Type:* string[]

---

##### `resourcesToRemove`<sup>Required</sup> <a name="resourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemove"></a>

```typescript
public readonly resourcesToRemove: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `trafficPercentageToMonitor`<sup>Required</sup> <a name="trafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor"></a>

```typescript
public readonly trafficPercentageToMonitor: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InternetmonitorMonitorConfig <a name="InternetmonitorMonitorConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

const internetmonitorMonitorConfig: internetmonitorMonitor.InternetmonitorMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName">monitorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig">healthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.includeLinkedAccounts">includeLinkedAccounts</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#include_linked_accounts InternetmonitorMonitor#include_linked_accounts}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery">internetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#linked_account_id InternetmonitorMonitor#linked_account_id}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor">maxCityNetworksToMonitor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToAdd">resourcesToAdd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources_to_add InternetmonitorMonitor#resources_to_add}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToRemove">resourcesToRemove</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources_to_remove InternetmonitorMonitor#resources_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor">trafficPercentageToMonitor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}.

---

##### `healthEventsConfig`<sup>Optional</sup> <a name="healthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig"></a>

```typescript
public readonly healthEventsConfig: InternetmonitorMonitorHealthEventsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}.

---

##### `includeLinkedAccounts`<sup>Optional</sup> <a name="includeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.includeLinkedAccounts"></a>

```typescript
public readonly includeLinkedAccounts: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#include_linked_accounts InternetmonitorMonitor#include_linked_accounts}.

---

##### `internetMeasurementsLogDelivery`<sup>Optional</sup> <a name="internetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery"></a>

```typescript
public readonly internetMeasurementsLogDelivery: InternetmonitorMonitorInternetMeasurementsLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}.

---

##### `linkedAccountId`<sup>Optional</sup> <a name="linkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#linked_account_id InternetmonitorMonitor#linked_account_id}.

---

##### `maxCityNetworksToMonitor`<sup>Optional</sup> <a name="maxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor"></a>

```typescript
public readonly maxCityNetworksToMonitor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}.

---

##### `resourcesToAdd`<sup>Optional</sup> <a name="resourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToAdd"></a>

```typescript
public readonly resourcesToAdd: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources_to_add InternetmonitorMonitor#resources_to_add}.

---

##### `resourcesToRemove`<sup>Optional</sup> <a name="resourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToRemove"></a>

```typescript
public readonly resourcesToRemove: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources_to_remove InternetmonitorMonitor#resources_to_remove}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | InternetmonitorMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}.

---

##### `trafficPercentageToMonitor`<sup>Optional</sup> <a name="trafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor"></a>

```typescript
public readonly trafficPercentageToMonitor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}.

---

### InternetmonitorMonitorHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

const internetmonitorMonitorHealthEventsConfig: internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityLocalHealthEventsConfig">availabilityLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#availability_local_health_events_config InternetmonitorMonitor#availability_local_health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold">availabilityScoreThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceLocalHealthEventsConfig">performanceLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#performance_local_health_events_config InternetmonitorMonitor#performance_local_health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold">performanceScoreThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}. |

---

##### `availabilityLocalHealthEventsConfig`<sup>Optional</sup> <a name="availabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityLocalHealthEventsConfig"></a>

```typescript
public readonly availabilityLocalHealthEventsConfig: InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#availability_local_health_events_config InternetmonitorMonitor#availability_local_health_events_config}.

---

##### `availabilityScoreThreshold`<sup>Optional</sup> <a name="availabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold"></a>

```typescript
public readonly availabilityScoreThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}.

---

##### `performanceLocalHealthEventsConfig`<sup>Optional</sup> <a name="performanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceLocalHealthEventsConfig"></a>

```typescript
public readonly performanceLocalHealthEventsConfig: InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#performance_local_health_events_config InternetmonitorMonitor#performance_local_health_events_config}.

---

##### `performanceScoreThreshold`<sup>Optional</sup> <a name="performanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold"></a>

```typescript
public readonly performanceScoreThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}.

---

### InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

const internetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig: internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.healthScoreThreshold">healthScoreThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.minTrafficImpact">minTrafficImpact</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |

---

##### `healthScoreThreshold`<sup>Optional</sup> <a name="healthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.healthScoreThreshold"></a>

```typescript
public readonly healthScoreThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}.

---

##### `minTrafficImpact`<sup>Optional</sup> <a name="minTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.minTrafficImpact"></a>

```typescript
public readonly minTrafficImpact: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

### InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

const internetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig: internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.healthScoreThreshold">healthScoreThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.minTrafficImpact">minTrafficImpact</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |

---

##### `healthScoreThreshold`<sup>Optional</sup> <a name="healthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.healthScoreThreshold"></a>

```typescript
public readonly healthScoreThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}.

---

##### `minTrafficImpact`<sup>Optional</sup> <a name="minTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.minTrafficImpact"></a>

```typescript
public readonly minTrafficImpact: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

### InternetmonitorMonitorInternetMeasurementsLogDelivery <a name="InternetmonitorMonitorInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

const internetmonitorMonitorInternetMeasurementsLogDelivery: internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}. |

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config"></a>

```typescript
public readonly s3Config: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}.

---

### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

const internetmonitorMonitorInternetMeasurementsLogDeliveryS3Config: internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus">logDeliveryStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}.

---

##### `logDeliveryStatus`<sup>Optional</sup> <a name="logDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus"></a>

```typescript
public readonly logDeliveryStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}.

---

### InternetmonitorMonitorTags <a name="InternetmonitorMonitorTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

const internetmonitorMonitorTags: internetmonitorMonitor.InternetmonitorMonitorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#key InternetmonitorMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#value InternetmonitorMonitor#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#key InternetmonitorMonitor#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#value InternetmonitorMonitor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

new internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold">resetHealthScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetMinTrafficImpact">resetMinTrafficImpact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthScoreThreshold` <a name="resetHealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold"></a>

```typescript
public resetHealthScoreThreshold(): void
```

##### `resetMinTrafficImpact` <a name="resetMinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetMinTrafficImpact"></a>

```typescript
public resetMinTrafficImpact(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput">healthScoreThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput">minTrafficImpactInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">healthScoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact">minTrafficImpact</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthScoreThresholdInput`<sup>Optional</sup> <a name="healthScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput"></a>

```typescript
public readonly healthScoreThresholdInput: number;
```

- *Type:* number

---

##### `minTrafficImpactInput`<sup>Optional</sup> <a name="minTrafficImpactInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput"></a>

```typescript
public readonly minTrafficImpactInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `healthScoreThreshold`<sup>Required</sup> <a name="healthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```typescript
public readonly healthScoreThreshold: number;
```

- *Type:* number

---

##### `minTrafficImpact`<sup>Required</sup> <a name="minTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```typescript
public readonly minTrafficImpact: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---


### InternetmonitorMonitorHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

new internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig">putAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig">putPerformanceLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityLocalHealthEventsConfig">resetAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold">resetAvailabilityScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceLocalHealthEventsConfig">resetPerformanceLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold">resetPerformanceScoreThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailabilityLocalHealthEventsConfig` <a name="putAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig"></a>

```typescript
public putAvailabilityLocalHealthEventsConfig(value: InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---

##### `putPerformanceLocalHealthEventsConfig` <a name="putPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig"></a>

```typescript
public putPerformanceLocalHealthEventsConfig(value: InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---

##### `resetAvailabilityLocalHealthEventsConfig` <a name="resetAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityLocalHealthEventsConfig"></a>

```typescript
public resetAvailabilityLocalHealthEventsConfig(): void
```

##### `resetAvailabilityScoreThreshold` <a name="resetAvailabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold"></a>

```typescript
public resetAvailabilityScoreThreshold(): void
```

##### `resetPerformanceLocalHealthEventsConfig` <a name="resetPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceLocalHealthEventsConfig"></a>

```typescript
public resetPerformanceLocalHealthEventsConfig(): void
```

##### `resetPerformanceScoreThreshold` <a name="resetPerformanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold"></a>

```typescript
public resetPerformanceScoreThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig">availabilityLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig">performanceLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfigInput">availabilityLocalHealthEventsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput">availabilityScoreThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfigInput">performanceLocalHealthEventsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput">performanceScoreThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold">availabilityScoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold">performanceScoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityLocalHealthEventsConfig`<sup>Required</sup> <a name="availabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig"></a>

```typescript
public readonly availabilityLocalHealthEventsConfig: InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a>

---

##### `performanceLocalHealthEventsConfig`<sup>Required</sup> <a name="performanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig"></a>

```typescript
public readonly performanceLocalHealthEventsConfig: InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a>

---

##### `availabilityLocalHealthEventsConfigInput`<sup>Optional</sup> <a name="availabilityLocalHealthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfigInput"></a>

```typescript
public readonly availabilityLocalHealthEventsConfigInput: IResolvable | InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---

##### `availabilityScoreThresholdInput`<sup>Optional</sup> <a name="availabilityScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput"></a>

```typescript
public readonly availabilityScoreThresholdInput: number;
```

- *Type:* number

---

##### `performanceLocalHealthEventsConfigInput`<sup>Optional</sup> <a name="performanceLocalHealthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfigInput"></a>

```typescript
public readonly performanceLocalHealthEventsConfigInput: IResolvable | InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---

##### `performanceScoreThresholdInput`<sup>Optional</sup> <a name="performanceScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput"></a>

```typescript
public readonly performanceScoreThresholdInput: number;
```

- *Type:* number

---

##### `availabilityScoreThreshold`<sup>Required</sup> <a name="availabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold"></a>

```typescript
public readonly availabilityScoreThreshold: number;
```

- *Type:* number

---

##### `performanceScoreThreshold`<sup>Required</sup> <a name="performanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold"></a>

```typescript
public readonly performanceScoreThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InternetmonitorMonitorHealthEventsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---


### InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

new internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold">resetHealthScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetMinTrafficImpact">resetMinTrafficImpact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthScoreThreshold` <a name="resetHealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold"></a>

```typescript
public resetHealthScoreThreshold(): void
```

##### `resetMinTrafficImpact` <a name="resetMinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetMinTrafficImpact"></a>

```typescript
public resetMinTrafficImpact(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput">healthScoreThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput">minTrafficImpactInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">healthScoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact">minTrafficImpact</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthScoreThresholdInput`<sup>Optional</sup> <a name="healthScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput"></a>

```typescript
public readonly healthScoreThresholdInput: number;
```

- *Type:* number

---

##### `minTrafficImpactInput`<sup>Optional</sup> <a name="minTrafficImpactInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput"></a>

```typescript
public readonly minTrafficImpactInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `healthScoreThreshold`<sup>Required</sup> <a name="healthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```typescript
public readonly healthScoreThreshold: number;
```

- *Type:* number

---

##### `minTrafficImpact`<sup>Required</sup> <a name="minTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```typescript
public readonly minTrafficImpact: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

new internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config">putS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config">resetS3Config</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Config` <a name="putS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config"></a>

```typescript
public putS3Config(value: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `resetS3Config` <a name="resetS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config"></a>

```typescript
public resetS3Config(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput">s3ConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config"></a>

```typescript
public readonly s3Config: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a>

---

##### `s3ConfigInput`<sup>Optional</sup> <a name="s3ConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput"></a>

```typescript
public readonly s3ConfigInput: IResolvable | InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InternetmonitorMonitorInternetMeasurementsLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

new internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus">resetLogDeliveryStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetLogDeliveryStatus` <a name="resetLogDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus"></a>

```typescript
public resetLogDeliveryStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput">logDeliveryStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus">logDeliveryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `logDeliveryStatusInput`<sup>Optional</sup> <a name="logDeliveryStatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput"></a>

```typescript
public readonly logDeliveryStatusInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `logDeliveryStatus`<sup>Required</sup> <a name="logDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus"></a>

```typescript
public readonly logDeliveryStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---


### InternetmonitorMonitorTagsList <a name="InternetmonitorMonitorTagsList" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

new internetmonitorMonitor.InternetmonitorMonitorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get"></a>

```typescript
public get(index: number): InternetmonitorMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InternetmonitorMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]

---


### InternetmonitorMonitorTagsOutputReference <a name="InternetmonitorMonitorTagsOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer"></a>

```typescript
import { internetmonitorMonitor } from '@cdktn/provider-awscc'

new internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InternetmonitorMonitorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>

---



