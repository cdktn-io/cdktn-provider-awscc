# `iotwirelessNetworkAnalyzerConfiguration` Submodule <a name="`iotwirelessNetworkAnalyzerConfiguration` Submodule" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessNetworkAnalyzerConfiguration <a name="IotwirelessNetworkAnalyzerConfiguration" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

new iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration(scope: Construct, id: string, config: IotwirelessNetworkAnalyzerConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig">IotwirelessNetworkAnalyzerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig">IotwirelessNetworkAnalyzerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent">putTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTraceContent">resetTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessDevices">resetWirelessDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessGateways">resetWirelessGateways</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessNetworkAnalyzerConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]

---

##### `putTraceContent` <a name="putTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent"></a>

```typescript
public putTraceContent(value: IotwirelessNetworkAnalyzerConfigurationTraceContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTraceContent` <a name="resetTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTraceContent"></a>

```typescript
public resetTraceContent(): void
```

##### `resetWirelessDevices` <a name="resetWirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessDevices"></a>

```typescript
public resetWirelessDevices(): void
```

##### `resetWirelessGateways` <a name="resetWirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessGateways"></a>

```typescript
public resetWirelessGateways(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessNetworkAnalyzerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessNetworkAnalyzerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessNetworkAnalyzerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList">IotwirelessNetworkAnalyzerConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContent">traceContent</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContentInput">traceContentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevicesInput">wirelessDevicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGatewaysInput">wirelessGatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices">wirelessDevices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways">wirelessGateways</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tags"></a>

```typescript
public readonly tags: IotwirelessNetworkAnalyzerConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList">IotwirelessNetworkAnalyzerConfigurationTagsList</a>

---

##### `traceContent`<sup>Required</sup> <a name="traceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContent"></a>

```typescript
public readonly traceContent: IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessNetworkAnalyzerConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]

---

##### `traceContentInput`<sup>Optional</sup> <a name="traceContentInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContentInput"></a>

```typescript
public readonly traceContentInput: IResolvable | IotwirelessNetworkAnalyzerConfigurationTraceContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---

##### `wirelessDevicesInput`<sup>Optional</sup> <a name="wirelessDevicesInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevicesInput"></a>

```typescript
public readonly wirelessDevicesInput: string[];
```

- *Type:* string[]

---

##### `wirelessGatewaysInput`<sup>Optional</sup> <a name="wirelessGatewaysInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGatewaysInput"></a>

```typescript
public readonly wirelessGatewaysInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `wirelessDevices`<sup>Required</sup> <a name="wirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices"></a>

```typescript
public readonly wirelessDevices: string[];
```

- *Type:* string[]

---

##### `wirelessGateways`<sup>Required</sup> <a name="wirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways"></a>

```typescript
public readonly wirelessGateways: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessNetworkAnalyzerConfigurationConfig <a name="IotwirelessNetworkAnalyzerConfigurationConfig" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.Initializer"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

const iotwirelessNetworkAnalyzerConfigurationConfig: iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.name">name</a></code> | <code>string</code> | Name of the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.description">description</a></code> | <code>string</code> | The description of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.traceContent">traceContent</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | Trace content for your wireless gateway and wireless device resources. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessDevices">wirelessDevices</a></code> | <code>string[]</code> | List of wireless gateway resources that have been added to the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessGateways">wirelessGateways</a></code> | <code>string[]</code> | List of wireless gateway resources that have been added to the network analyzer configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#name IotwirelessNetworkAnalyzerConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#description IotwirelessNetworkAnalyzerConfiguration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessNetworkAnalyzerConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#tags IotwirelessNetworkAnalyzerConfiguration#tags}

---

##### `traceContent`<sup>Optional</sup> <a name="traceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.traceContent"></a>

```typescript
public readonly traceContent: IotwirelessNetworkAnalyzerConfigurationTraceContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

Trace content for your wireless gateway and wireless device resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#trace_content IotwirelessNetworkAnalyzerConfiguration#trace_content}

---

##### `wirelessDevices`<sup>Optional</sup> <a name="wirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessDevices"></a>

```typescript
public readonly wirelessDevices: string[];
```

- *Type:* string[]

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_devices IotwirelessNetworkAnalyzerConfiguration#wireless_devices}

---

##### `wirelessGateways`<sup>Optional</sup> <a name="wirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessGateways"></a>

```typescript
public readonly wirelessGateways: string[];
```

- *Type:* string[]

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_gateways IotwirelessNetworkAnalyzerConfiguration#wireless_gateways}

---

### IotwirelessNetworkAnalyzerConfigurationTags <a name="IotwirelessNetworkAnalyzerConfigurationTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.Initializer"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

const iotwirelessNetworkAnalyzerConfigurationTags: iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#key IotwirelessNetworkAnalyzerConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#value IotwirelessNetworkAnalyzerConfiguration#value}

---

### IotwirelessNetworkAnalyzerConfigurationTraceContent <a name="IotwirelessNetworkAnalyzerConfigurationTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.Initializer"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

const iotwirelessNetworkAnalyzerConfigurationTraceContent: iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.logLevel">logLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.wirelessDeviceFrameInfo">wirelessDeviceFrameInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}. |

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}.

---

##### `wirelessDeviceFrameInfo`<sup>Optional</sup> <a name="wirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.wirelessDeviceFrameInfo"></a>

```typescript
public readonly wirelessDeviceFrameInfo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessNetworkAnalyzerConfigurationTagsList <a name="IotwirelessNetworkAnalyzerConfigurationTagsList" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

new iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get"></a>

```typescript
public get(index: number): IotwirelessNetworkAnalyzerConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessNetworkAnalyzerConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]

---


### IotwirelessNetworkAnalyzerConfigurationTagsOutputReference <a name="IotwirelessNetworkAnalyzerConfigurationTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

new iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessNetworkAnalyzerConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>

---


### IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference <a name="IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer"></a>

```typescript
import { iotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

new iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetWirelessDeviceFrameInfo">resetWirelessDeviceFrameInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetWirelessDeviceFrameInfo` <a name="resetWirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetWirelessDeviceFrameInfo"></a>

```typescript
public resetWirelessDeviceFrameInfo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfoInput">wirelessDeviceFrameInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo">wirelessDeviceFrameInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `wirelessDeviceFrameInfoInput`<sup>Optional</sup> <a name="wirelessDeviceFrameInfoInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfoInput"></a>

```typescript
public readonly wirelessDeviceFrameInfoInput: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `wirelessDeviceFrameInfo`<sup>Required</sup> <a name="wirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo"></a>

```typescript
public readonly wirelessDeviceFrameInfo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessNetworkAnalyzerConfigurationTraceContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---



