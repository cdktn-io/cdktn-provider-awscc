# `rumAppMonitor` Submodule <a name="`rumAppMonitor` Submodule" id="@cdktn/provider-awscc.rumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumAppMonitor <a name="RumAppMonitor" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor awscc_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitor(scope: Construct, id: string, config: RumAppMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig">RumAppMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig">RumAppMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration">putAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents">putCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration">putDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy">putResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration">resetAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCustomEvents">resetCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCwLogEnabled">resetCwLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDeobfuscationConfiguration">resetDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomainList">resetDomainList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetResourcePolicy">resetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppMonitorConfiguration` <a name="putAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration"></a>

```typescript
public putAppMonitorConfiguration(value: RumAppMonitorAppMonitorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `putCustomEvents` <a name="putCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents"></a>

```typescript
public putCustomEvents(value: RumAppMonitorCustomEvents): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `putDeobfuscationConfiguration` <a name="putDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration"></a>

```typescript
public putDeobfuscationConfiguration(value: RumAppMonitorDeobfuscationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---

##### `putResourcePolicy` <a name="putResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy"></a>

```typescript
public putResourcePolicy(value: RumAppMonitorResourcePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags"></a>

```typescript
public putTags(value: IResolvable | RumAppMonitorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>[]

---

##### `resetAppMonitorConfiguration` <a name="resetAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration"></a>

```typescript
public resetAppMonitorConfiguration(): void
```

##### `resetCustomEvents` <a name="resetCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCustomEvents"></a>

```typescript
public resetCustomEvents(): void
```

##### `resetCwLogEnabled` <a name="resetCwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCwLogEnabled"></a>

```typescript
public resetCwLogEnabled(): void
```

##### `resetDeobfuscationConfiguration` <a name="resetDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDeobfuscationConfiguration"></a>

```typescript
public resetDeobfuscationConfiguration(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetDomainList` <a name="resetDomainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomainList"></a>

```typescript
public resetDomainList(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetResourcePolicy` <a name="resetResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetResourcePolicy"></a>

```typescript
public resetResourcePolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

rumAppMonitor.RumAppMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

rumAppMonitor.RumAppMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

rumAppMonitor.RumAppMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

rumAppMonitor.RumAppMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RumAppMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RumAppMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RumAppMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorId">appMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEvents">customEvents</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfiguration">deobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference">RumAppMonitorDeobfuscationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference">RumAppMonitorResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList">RumAppMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput">appMonitorConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEventsInput">customEventsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput">cwLogEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfigurationInput">deobfuscationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainListInput">domainListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicyInput">resourcePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabled">cwLogEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainList">domainList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platform">platform</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appMonitorConfiguration`<sup>Required</sup> <a name="appMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration"></a>

```typescript
public readonly appMonitorConfiguration: RumAppMonitorAppMonitorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `appMonitorId`<sup>Required</sup> <a name="appMonitorId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorId"></a>

```typescript
public readonly appMonitorId: string;
```

- *Type:* string

---

##### `customEvents`<sup>Required</sup> <a name="customEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEvents"></a>

```typescript
public readonly customEvents: RumAppMonitorCustomEventsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a>

---

##### `deobfuscationConfiguration`<sup>Required</sup> <a name="deobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfiguration"></a>

```typescript
public readonly deobfuscationConfiguration: RumAppMonitorDeobfuscationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference">RumAppMonitorDeobfuscationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: RumAppMonitorResourcePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference">RumAppMonitorResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tags"></a>

```typescript
public readonly tags: RumAppMonitorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList">RumAppMonitorTagsList</a>

---

##### `appMonitorConfigurationInput`<sup>Optional</sup> <a name="appMonitorConfigurationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput"></a>

```typescript
public readonly appMonitorConfigurationInput: IResolvable | RumAppMonitorAppMonitorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `customEventsInput`<sup>Optional</sup> <a name="customEventsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEventsInput"></a>

```typescript
public readonly customEventsInput: IResolvable | RumAppMonitorCustomEvents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `cwLogEnabledInput`<sup>Optional</sup> <a name="cwLogEnabledInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput"></a>

```typescript
public readonly cwLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deobfuscationConfigurationInput`<sup>Optional</sup> <a name="deobfuscationConfigurationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfigurationInput"></a>

```typescript
public readonly deobfuscationConfigurationInput: IResolvable | RumAppMonitorDeobfuscationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainListInput`<sup>Optional</sup> <a name="domainListInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainListInput"></a>

```typescript
public readonly domainListInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `resourcePolicyInput`<sup>Optional</sup> <a name="resourcePolicyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicyInput"></a>

```typescript
public readonly resourcePolicyInput: IResolvable | RumAppMonitorResourcePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RumAppMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>[]

---

##### `cwLogEnabled`<sup>Required</sup> <a name="cwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabled"></a>

```typescript
public readonly cwLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainList`<sup>Required</sup> <a name="domainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainList"></a>

```typescript
public readonly domainList: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RumAppMonitorAppMonitorConfiguration <a name="RumAppMonitorAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorAppMonitorConfiguration: rumAppMonitor.RumAppMonitorAppMonitorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies">allowCookies</a></code> | <code>boolean \| cdktn.IResolvable</code> | If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXRay">enableXRay</a></code> | <code>boolean \| cdktn.IResolvable</code> | If you set this to true, RUM enables xray tracing for the user sessions that RUM samples. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages">excludedPages</a></code> | <code>string[]</code> | A list of URLs in your website or application to exclude from RUM data collection. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages">favoritePages</a></code> | <code>string[]</code> | A list of pages in the RUM console that are to be displayed with a favorite icon. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn">guestRoleArn</a></code> | <code>string</code> | The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The ID of the identity pool that is used to authorize the sending of data to RUM. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages">includedPages</a></code> | <code>string[]</code> | If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.metricDestinations">metricDestinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>[]</code> | An array of structures which define the destinations and the metrics that you want to send. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate">sessionSampleRate</a></code> | <code>number</code> | Specifies the percentage of user sessions to use for RUM data collection. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries">telemetries</a></code> | <code>string[]</code> | An array that lists the types of telemetry data that this app monitor is to collect. |

---

##### `allowCookies`<sup>Optional</sup> <a name="allowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies"></a>

```typescript
public readonly allowCookies: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie.

The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}

---

##### `enableXRay`<sup>Optional</sup> <a name="enableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXRay"></a>

```typescript
public readonly enableXRay: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If you set this to true, RUM enables xray tracing for the user sessions that RUM samples.

RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#enable_x_ray RumAppMonitor#enable_x_ray}

---

##### `excludedPages`<sup>Optional</sup> <a name="excludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages"></a>

```typescript
public readonly excludedPages: string[];
```

- *Type:* string[]

A list of URLs in your website or application to exclude from RUM data collection.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}

---

##### `favoritePages`<sup>Optional</sup> <a name="favoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages"></a>

```typescript
public readonly favoritePages: string[];
```

- *Type:* string[]

A list of pages in the RUM console that are to be displayed with a favorite icon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}

---

##### `guestRoleArn`<sup>Optional</sup> <a name="guestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn"></a>

```typescript
public readonly guestRoleArn: string;
```

- *Type:* string

The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}

---

##### `identityPoolId`<sup>Optional</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The ID of the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}

---

##### `includedPages`<sup>Optional</sup> <a name="includedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages"></a>

```typescript
public readonly includedPages: string[];
```

- *Type:* string[]

If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#included_pages RumAppMonitor#included_pages}

---

##### `metricDestinations`<sup>Optional</sup> <a name="metricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.metricDestinations"></a>

```typescript
public readonly metricDestinations: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>[]

An array of structures which define the destinations and the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#metric_destinations RumAppMonitor#metric_destinations}

---

##### `sessionSampleRate`<sup>Optional</sup> <a name="sessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate"></a>

```typescript
public readonly sessionSampleRate: number;
```

- *Type:* number

Specifies the percentage of user sessions to use for RUM data collection.

Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}

---

##### `telemetries`<sup>Optional</sup> <a name="telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries"></a>

```typescript
public readonly telemetries: string[];
```

- *Type:* string[]

An array that lists the types of telemetry data that this app monitor is to collect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#telemetries RumAppMonitor#telemetries}

---

### RumAppMonitorAppMonitorConfigurationMetricDestinations <a name="RumAppMonitorAppMonitorConfigurationMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorAppMonitorConfigurationMetricDestinations: rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destination">destination</a></code> | <code>string</code> | Defines the destination to send the metrics to. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destinationArn">destinationArn</a></code> | <code>string</code> | Evidently has been discontinued and therefore this is no longer an acceptable field. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Evidently has been discontinued and therefore this is no longer an acceptable field. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.metricDefinitions">metricDefinitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>[]</code> | An array of structures which define the metrics that you want to send. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Defines the destination to send the metrics to.

Valid values are CloudWatch and Evidently. Note: Evidently has been discontinued and is no longer supported - requests with Evidently will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#destination RumAppMonitor#destination}

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Evidently has been discontinued and therefore this is no longer an acceptable field.

If Destination is CloudWatch, do not use this parameter. 

This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#destination_arn RumAppMonitor#destination_arn}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Evidently has been discontinued and therefore this is no longer an acceptable field.

If Destination is CloudWatch, do not use this parameter. 

This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#iam_role_arn RumAppMonitor#iam_role_arn}

---

##### `metricDefinitions`<sup>Optional</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.metricDefinitions"></a>

```typescript
public readonly metricDefinitions: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>[]

An array of structures which define the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#metric_definitions RumAppMonitor#metric_definitions}

---

### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions: rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.dimensionKeys">dimensionKeys</a></code> | <code>{[ key: string ]: string}</code> | Use this field only if you are sending the metric to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.eventPattern">eventPattern</a></code> | <code>string</code> | The pattern that defines the metric, specified as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.name">name</a></code> | <code>string</code> | The name for the metric that is defined in this structure. For extended metrics, valid values are the following:. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.namespace">namespace</a></code> | <code>string</code> | The namespace used by CloudWatch Metrics for the metric that is defined in this structure. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.unitLabel">unitLabel</a></code> | <code>string</code> | The CloudWatch metric unit to use for this metric. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.valueKey">valueKey</a></code> | <code>string</code> | The field within the event object that the metric value is sourced from. |

---

##### `dimensionKeys`<sup>Optional</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.dimensionKeys"></a>

```typescript
public readonly dimensionKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Use this field only if you are sending the metric to CloudWatch.

This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:

"metadata.pageId": "PageId"

"metadata.browserName": "BrowserName"

"metadata.deviceType": "DeviceType"

"metadata.osName": "OSName"

"metadata.countryCode": "CountryCode"

"event_details.fileType": "FileType"

All dimensions listed in this field must also be included in EventPattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#dimension_keys RumAppMonitor#dimension_keys}

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

The pattern that defines the metric, specified as a JSON object.

RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.

When you define extended metrics, the metric definition is not valid if EventPattern is omitted.

Example event patterns:

'{ "event_type": ["com.amazon.rum.js_error_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Firefox" ] }, "event_details": { "duration": [{ "numeric": [ "<", 2000 ] }] } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], "countryCode": [ "US" ] }, "event_details": { "duration": [{ "numeric": [ ">=", 2000, "<", 8000 ] }] } }'

If the metrics destination' is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#event_pattern RumAppMonitor#event_pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the metric that is defined in this structure. For extended metrics, valid values are the following:.

PerformanceNavigationDuration

PerformanceResourceDuration

NavigationSatisfiedTransaction

NavigationToleratedTransaction

NavigationFrustratedTransaction

WebVitalsCumulativeLayoutShift

WebVitalsFirstInputDelay

WebVitalsLargestContentfulPaint

WebVitalsInteractionToNextPaint

JsErrorCount

HttpErrorCount

SessionCount

PageViewCount

Http4xxCount

Http5xxCount

SessionDuration

PageViewCountPerSession

JsErrorCountPerSession

Http4xxCountPerSession

Http5xxCountPerSession

JsErrorCountPerPageView

Http4xxCountPerPageView

Http5xxCountPerPageView

TimeOnPage

ColdLaunchTime

WarmLaunchTime

CrashCount

ANRCount

AppHangCount

ScreenLoadCount

ScreenLoadTime

NetworkLatency

SpanPayloadSize

LogEventPayloadSize

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace used by CloudWatch Metrics for the metric that is defined in this structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#namespace RumAppMonitor#namespace}

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string

The CloudWatch metric unit to use for this metric.

If you omit this field, the metric is recorded with no unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#unit_label RumAppMonitor#unit_label}

---

##### `valueKey`<sup>Optional</sup> <a name="valueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

The field within the event object that the metric value is sourced from.

If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you just want to count the number of events that the filter catches.

If this metric is sent to Evidently, this field will be passed to Evidently raw and Evidently will handle data extraction from the event. Note: Evidently has been discontinued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#value_key RumAppMonitor#value_key}

---

### RumAppMonitorConfig <a name="RumAppMonitorConfig" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorConfig: rumAppMonitor.RumAppMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.name">name</a></code> | <code>string</code> | A name for the app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | AppMonitor configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.customEvents">customEvents</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | AppMonitor custom events configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled">cwLogEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Data collected by RUM is kept by RUM for 30 days and then deleted. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.deobfuscationConfiguration">deobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | A structure that contains the configuration for how an app monitor can deobfuscate stack traces. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domain">domain</a></code> | <code>string</code> | The top-level internet domain name for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domainList">domainList</a></code> | <code>string[]</code> | The top-level internet domain names for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | A structure that defines resource policy attached to your app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>[]</code> | Assigns one or more tags (key-value pairs) to the app monitor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `appMonitorConfiguration`<sup>Optional</sup> <a name="appMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration"></a>

```typescript
public readonly appMonitorConfiguration: RumAppMonitorAppMonitorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

AppMonitor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `customEvents`<sup>Optional</sup> <a name="customEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.customEvents"></a>

```typescript
public readonly customEvents: RumAppMonitorCustomEvents;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

AppMonitor custom events configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cwLogEnabled`<sup>Optional</sup> <a name="cwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled"></a>

```typescript
public readonly cwLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Data collected by RUM is kept by RUM for 30 days and then deleted.

This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}

---

##### `deobfuscationConfiguration`<sup>Optional</sup> <a name="deobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.deobfuscationConfiguration"></a>

```typescript
public readonly deobfuscationConfiguration: RumAppMonitorDeobfuscationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

A structure that contains the configuration for how an app monitor can deobfuscate stack traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#deobfuscation_configuration RumAppMonitor#deobfuscation_configuration}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The top-level internet domain name for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#domain RumAppMonitor#domain}

---

##### `domainList`<sup>Optional</sup> <a name="domainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domainList"></a>

```typescript
public readonly domainList: string[];
```

- *Type:* string[]

The top-level internet domain names for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#domain_list RumAppMonitor#domain_list}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}.

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: RumAppMonitorResourcePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

A structure that defines resource policy attached to your app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#resource_policy RumAppMonitor#resource_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RumAppMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>[]

Assigns one or more tags (key-value pairs) to the app monitor.

Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#tags RumAppMonitor#tags}

---

### RumAppMonitorCustomEvents <a name="RumAppMonitorCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorCustomEvents: rumAppMonitor.RumAppMonitorCustomEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.property.status">status</a></code> | <code>string</code> | Indicates whether AppMonitor accepts custom events. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates whether AppMonitor accepts custom events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

### RumAppMonitorDeobfuscationConfiguration <a name="RumAppMonitorDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorDeobfuscationConfiguration: rumAppMonitor.RumAppMonitorDeobfuscationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.property.javaScriptSourceMaps">javaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps. |

---

##### `javaScriptSourceMaps`<sup>Optional</sup> <a name="javaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.property.javaScriptSourceMaps"></a>

```typescript
public readonly javaScriptSourceMaps: RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#java_script_source_maps RumAppMonitor#java_script_source_maps}

---

### RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps <a name="RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps: rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.s3Uri">s3Uri</a></code> | <code>string</code> | The S3Uri of the bucket or folder that stores the source map files. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.status">status</a></code> | <code>string</code> | Specifies whether JavaScript error stack traces should be unminified for this app monitor. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

The S3Uri of the bucket or folder that stores the source map files.

It is required if status is ENABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#s3_uri RumAppMonitor#s3_uri}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Specifies whether JavaScript error stack traces should be unminified for this app monitor.

The default is for JavaScript error stack trace unminification to be DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

### RumAppMonitorResourcePolicy <a name="RumAppMonitorResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorResourcePolicy: rumAppMonitor.RumAppMonitorResourcePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyDocument">policyDocument</a></code> | <code>string</code> | The JSON to use as the resource policy. The document can be up to 4 KB in size. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyRevisionId">policyRevisionId</a></code> | <code>string</code> | A string value that you can use to conditionally update your policy. |

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

The JSON to use as the resource policy. The document can be up to 4 KB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#policy_document RumAppMonitor#policy_document}

---

##### `policyRevisionId`<sup>Optional</sup> <a name="policyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyRevisionId"></a>

```typescript
public readonly policyRevisionId: string;
```

- *Type:* string

A string value that you can use to conditionally update your policy.

You can provide the revision ID of your existing policy to make mutating requests against that policy. 

 When you assign a policy revision ID, then later requests about that policy will be rejected with an InvalidPolicyRevisionIdException error if they don't provide the correct current revision ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#policy_revision_id RumAppMonitor#policy_revision_id}

---

### RumAppMonitorTags <a name="RumAppMonitorTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

const rumAppMonitorTags: rumAppMonitor.RumAppMonitorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#key RumAppMonitor#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rum_app_monitor#value RumAppMonitor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RumAppMonitorAppMonitorConfigurationMetricDestinationsList <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get"></a>

```typescript
public get(index: number): RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>[]

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get"></a>

```typescript
public get(index: number): RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>[]

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetDimensionKeys">resetDimensionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetEventPattern">resetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetUnitLabel">resetUnitLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetValueKey">resetValueKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionKeys` <a name="resetDimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetDimensionKeys"></a>

```typescript
public resetDimensionKeys(): void
```

##### `resetEventPattern` <a name="resetEventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetEventPattern"></a>

```typescript
public resetEventPattern(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetUnitLabel` <a name="resetUnitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetUnitLabel"></a>

```typescript
public resetUnitLabel(): void
```

##### `resetValueKey` <a name="resetValueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetValueKey"></a>

```typescript
public resetValueKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeysInput">dimensionKeysInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPatternInput">eventPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabelInput">unitLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKeyInput">valueKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys">dimensionKeys</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern">eventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel">unitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey">valueKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionKeysInput`<sup>Optional</sup> <a name="dimensionKeysInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeysInput"></a>

```typescript
public readonly dimensionKeysInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPatternInput"></a>

```typescript
public readonly eventPatternInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `unitLabelInput`<sup>Optional</sup> <a name="unitLabelInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabelInput"></a>

```typescript
public readonly unitLabelInput: string;
```

- *Type:* string

---

##### `valueKeyInput`<sup>Optional</sup> <a name="valueKeyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKeyInput"></a>

```typescript
public readonly valueKeyInput: string;
```

- *Type:* string

---

##### `dimensionKeys`<sup>Required</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys"></a>

```typescript
public readonly dimensionKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `unitLabel`<sup>Required</sup> <a name="unitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions">putMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetMetricDefinitions">resetMetricDefinitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDefinitions` <a name="putMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions"></a>

```typescript
public putMetricDefinitions(value: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>[]

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestinationArn"></a>

```typescript
public resetDestinationArn(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```

##### `resetMetricDefinitions` <a name="resetMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetMetricDefinitions"></a>

```typescript
public resetMetricDefinitions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions">metricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitionsInput">metricDefinitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDefinitions`<sup>Required</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions"></a>

```typescript
public readonly metricDefinitions: RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a>

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `metricDefinitionsInput`<sup>Optional</sup> <a name="metricDefinitionsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitionsInput"></a>

```typescript
public readonly metricDefinitionsInput: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>

---


### RumAppMonitorAppMonitorConfigurationOutputReference <a name="RumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations">putMetricDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies">resetAllowCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXRay">resetEnableXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages">resetExcludedPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages">resetFavoritePages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn">resetGuestRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId">resetIdentityPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages">resetIncludedPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetMetricDestinations">resetMetricDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate">resetSessionSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries">resetTelemetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDestinations` <a name="putMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations"></a>

```typescript
public putMetricDestinations(value: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>[]

---

##### `resetAllowCookies` <a name="resetAllowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies"></a>

```typescript
public resetAllowCookies(): void
```

##### `resetEnableXRay` <a name="resetEnableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXRay"></a>

```typescript
public resetEnableXRay(): void
```

##### `resetExcludedPages` <a name="resetExcludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages"></a>

```typescript
public resetExcludedPages(): void
```

##### `resetFavoritePages` <a name="resetFavoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages"></a>

```typescript
public resetFavoritePages(): void
```

##### `resetGuestRoleArn` <a name="resetGuestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn"></a>

```typescript
public resetGuestRoleArn(): void
```

##### `resetIdentityPoolId` <a name="resetIdentityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId"></a>

```typescript
public resetIdentityPoolId(): void
```

##### `resetIncludedPages` <a name="resetIncludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages"></a>

```typescript
public resetIncludedPages(): void
```

##### `resetMetricDestinations` <a name="resetMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetMetricDestinations"></a>

```typescript
public resetMetricDestinations(): void
```

##### `resetSessionSampleRate` <a name="resetSessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate"></a>

```typescript
public resetSessionSampleRate(): void
```

##### `resetTelemetries` <a name="resetTelemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries"></a>

```typescript
public resetTelemetries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations">metricDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput">allowCookiesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRayInput">enableXRayInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput">excludedPagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput">favoritePagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput">guestRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput">includedPagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinationsInput">metricDestinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput">sessionSampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput">telemetriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">allowCookies</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay">enableXRay</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">excludedPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">favoritePages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">guestRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">includedPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">sessionSampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">telemetries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDestinations`<sup>Required</sup> <a name="metricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations"></a>

```typescript
public readonly metricDestinations: RumAppMonitorAppMonitorConfigurationMetricDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsList</a>

---

##### `allowCookiesInput`<sup>Optional</sup> <a name="allowCookiesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput"></a>

```typescript
public readonly allowCookiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableXRayInput`<sup>Optional</sup> <a name="enableXRayInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRayInput"></a>

```typescript
public readonly enableXRayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludedPagesInput`<sup>Optional</sup> <a name="excludedPagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput"></a>

```typescript
public readonly excludedPagesInput: string[];
```

- *Type:* string[]

---

##### `favoritePagesInput`<sup>Optional</sup> <a name="favoritePagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput"></a>

```typescript
public readonly favoritePagesInput: string[];
```

- *Type:* string[]

---

##### `guestRoleArnInput`<sup>Optional</sup> <a name="guestRoleArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput"></a>

```typescript
public readonly guestRoleArnInput: string;
```

- *Type:* string

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput"></a>

```typescript
public readonly identityPoolIdInput: string;
```

- *Type:* string

---

##### `includedPagesInput`<sup>Optional</sup> <a name="includedPagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput"></a>

```typescript
public readonly includedPagesInput: string[];
```

- *Type:* string[]

---

##### `metricDestinationsInput`<sup>Optional</sup> <a name="metricDestinationsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinationsInput"></a>

```typescript
public readonly metricDestinationsInput: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>[]

---

##### `sessionSampleRateInput`<sup>Optional</sup> <a name="sessionSampleRateInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput"></a>

```typescript
public readonly sessionSampleRateInput: number;
```

- *Type:* number

---

##### `telemetriesInput`<sup>Optional</sup> <a name="telemetriesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput"></a>

```typescript
public readonly telemetriesInput: string[];
```

- *Type:* string[]

---

##### `allowCookies`<sup>Required</sup> <a name="allowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```typescript
public readonly allowCookies: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableXRay`<sup>Required</sup> <a name="enableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay"></a>

```typescript
public readonly enableXRay: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludedPages`<sup>Required</sup> <a name="excludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```typescript
public readonly excludedPages: string[];
```

- *Type:* string[]

---

##### `favoritePages`<sup>Required</sup> <a name="favoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```typescript
public readonly favoritePages: string[];
```

- *Type:* string[]

---

##### `guestRoleArn`<sup>Required</sup> <a name="guestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```typescript
public readonly guestRoleArn: string;
```

- *Type:* string

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `includedPages`<sup>Required</sup> <a name="includedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```typescript
public readonly includedPages: string[];
```

- *Type:* string[]

---

##### `sessionSampleRate`<sup>Required</sup> <a name="sessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```typescript
public readonly sessionSampleRate: number;
```

- *Type:* number

---

##### `telemetries`<sup>Required</sup> <a name="telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```typescript
public readonly telemetries: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorAppMonitorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---


### RumAppMonitorCustomEventsOutputReference <a name="RumAppMonitorCustomEventsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorCustomEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorCustomEvents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---


### RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference <a name="RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---


### RumAppMonitorDeobfuscationConfigurationOutputReference <a name="RumAppMonitorDeobfuscationConfigurationOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps">putJavaScriptSourceMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resetJavaScriptSourceMaps">resetJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJavaScriptSourceMaps` <a name="putJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps"></a>

```typescript
public putJavaScriptSourceMaps(value: RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---

##### `resetJavaScriptSourceMaps` <a name="resetJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resetJavaScriptSourceMaps"></a>

```typescript
public resetJavaScriptSourceMaps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps">javaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMapsInput">javaScriptSourceMapsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `javaScriptSourceMaps`<sup>Required</sup> <a name="javaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps"></a>

```typescript
public readonly javaScriptSourceMaps: RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a>

---

##### `javaScriptSourceMapsInput`<sup>Optional</sup> <a name="javaScriptSourceMapsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMapsInput"></a>

```typescript
public readonly javaScriptSourceMapsInput: IResolvable | RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorDeobfuscationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---


### RumAppMonitorResourcePolicyOutputReference <a name="RumAppMonitorResourcePolicyOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorResourcePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyRevisionId">resetPolicyRevisionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetPolicyRevisionId` <a name="resetPolicyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyRevisionId"></a>

```typescript
public resetPolicyRevisionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionIdInput">policyRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionId">policyRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `policyRevisionIdInput`<sup>Optional</sup> <a name="policyRevisionIdInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionIdInput"></a>

```typescript
public readonly policyRevisionIdInput: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `policyRevisionId`<sup>Required</sup> <a name="policyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionId"></a>

```typescript
public readonly policyRevisionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorResourcePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---


### RumAppMonitorTagsList <a name="RumAppMonitorTagsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get"></a>

```typescript
public get(index: number): RumAppMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>[]

---


### RumAppMonitorTagsOutputReference <a name="RumAppMonitorTagsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer"></a>

```typescript
import { rumAppMonitor } from '@cdktn/provider-awscc'

new rumAppMonitor.RumAppMonitorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumAppMonitorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>

---



