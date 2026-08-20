# `robomakerSimulationApplication` Submodule <a name="`robomakerSimulationApplication` Submodule" id="@cdktn/provider-awscc.robomakerSimulationApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RobomakerSimulationApplication <a name="RobomakerSimulationApplication" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application awscc_robomaker_simulation_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

new robomakerSimulationApplication.RobomakerSimulationApplication(scope: Construct, id: string, config: RobomakerSimulationApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig">RobomakerSimulationApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig">RobomakerSimulationApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine">putRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite">putRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite">putSimulationSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetCurrentRevisionId">resetCurrentRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetRenderingEngine">resetRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRenderingEngine` <a name="putRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine"></a>

```typescript
public putRenderingEngine(value: RobomakerSimulationApplicationRenderingEngine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---

##### `putRobotSoftwareSuite` <a name="putRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite"></a>

```typescript
public putRobotSoftwareSuite(value: RobomakerSimulationApplicationRobotSoftwareSuite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---

##### `putSimulationSoftwareSuite` <a name="putSimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite"></a>

```typescript
public putSimulationSoftwareSuite(value: RobomakerSimulationApplicationSimulationSoftwareSuite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources"></a>

```typescript
public putSources(value: IResolvable | RobomakerSimulationApplicationSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]

---

##### `resetCurrentRevisionId` <a name="resetCurrentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetCurrentRevisionId"></a>

```typescript
public resetCurrentRevisionId(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRenderingEngine` <a name="resetRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetRenderingEngine"></a>

```typescript
public resetRenderingEngine(): void
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetSources"></a>

```typescript
public resetSources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RobomakerSimulationApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RobomakerSimulationApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RobomakerSimulationApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RobomakerSimulationApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RobomakerSimulationApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngine">renderingEngine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference">RobomakerSimulationApplicationRenderingEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuite">simulationSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList">RobomakerSimulationApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionIdInput">currentRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngineInput">renderingEngineInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuiteInput">robotSoftwareSuiteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuiteInput">simulationSoftwareSuiteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sourcesInput">sourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionId">currentRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `renderingEngine`<sup>Required</sup> <a name="renderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngine"></a>

```typescript
public readonly renderingEngine: RobomakerSimulationApplicationRenderingEngineOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference">RobomakerSimulationApplicationRenderingEngineOutputReference</a>

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuite"></a>

```typescript
public readonly robotSoftwareSuite: RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="simulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuite"></a>

```typescript
public readonly simulationSoftwareSuite: RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sources"></a>

```typescript
public readonly sources: RobomakerSimulationApplicationSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList">RobomakerSimulationApplicationSourcesList</a>

---

##### `currentRevisionIdInput`<sup>Optional</sup> <a name="currentRevisionIdInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionIdInput"></a>

```typescript
public readonly currentRevisionIdInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `renderingEngineInput`<sup>Optional</sup> <a name="renderingEngineInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngineInput"></a>

```typescript
public readonly renderingEngineInput: IResolvable | RobomakerSimulationApplicationRenderingEngine;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---

##### `robotSoftwareSuiteInput`<sup>Optional</sup> <a name="robotSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuiteInput"></a>

```typescript
public readonly robotSoftwareSuiteInput: IResolvable | RobomakerSimulationApplicationRobotSoftwareSuite;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---

##### `simulationSoftwareSuiteInput`<sup>Optional</sup> <a name="simulationSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuiteInput"></a>

```typescript
public readonly simulationSoftwareSuiteInput: IResolvable | RobomakerSimulationApplicationSimulationSoftwareSuite;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: IResolvable | RobomakerSimulationApplicationSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `currentRevisionId`<sup>Required</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionId"></a>

```typescript
public readonly currentRevisionId: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RobomakerSimulationApplicationConfig <a name="RobomakerSimulationApplicationConfig" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

const robomakerSimulationApplicationConfig: robomakerSimulationApplication.RobomakerSimulationApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.simulationSoftwareSuite">simulationSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | The simulation software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.currentRevisionId">currentRevisionId</a></code> | <code>string</code> | The current revision id. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.environment">environment</a></code> | <code>string</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.name">name</a></code> | <code>string</code> | The name of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.renderingEngine">renderingEngine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | The rendering engine for the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]</code> | The sources of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.robotSoftwareSuite"></a>

```typescript
public readonly robotSoftwareSuite: RobomakerSimulationApplicationRobotSoftwareSuite;
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

The robot software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#robot_software_suite RobomakerSimulationApplication#robot_software_suite}

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="simulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.simulationSoftwareSuite"></a>

```typescript
public readonly simulationSoftwareSuite: RobomakerSimulationApplicationSimulationSoftwareSuite;
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

The simulation software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#simulation_software_suite RobomakerSimulationApplication#simulation_software_suite}

---

##### `currentRevisionId`<sup>Optional</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.currentRevisionId"></a>

```typescript
public readonly currentRevisionId: string;
```

- *Type:* string

The current revision id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#current_revision_id RobomakerSimulationApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#environment RobomakerSimulationApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `renderingEngine`<sup>Optional</sup> <a name="renderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.renderingEngine"></a>

```typescript
public readonly renderingEngine: RobomakerSimulationApplicationRenderingEngine;
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

The rendering engine for the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#rendering_engine RobomakerSimulationApplication#rendering_engine}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.sources"></a>

```typescript
public readonly sources: IResolvable | RobomakerSimulationApplicationSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]

The sources of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#sources RobomakerSimulationApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#tags RobomakerSimulationApplication#tags}

---

### RobomakerSimulationApplicationRenderingEngine <a name="RobomakerSimulationApplicationRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

const robomakerSimulationApplicationRenderingEngine: robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.name">name</a></code> | <code>string</code> | The name of the rendering engine. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.version">version</a></code> | <code>string</code> | The version of the rendering engine. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationRobotSoftwareSuite <a name="RobomakerSimulationApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

const robomakerSimulationApplicationRobotSoftwareSuite: robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.name">name</a></code> | <code>string</code> | The name of the robot software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.version">version</a></code> | <code>string</code> | The version of the robot software suite. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationSimulationSoftwareSuite <a name="RobomakerSimulationApplicationSimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

const robomakerSimulationApplicationSimulationSoftwareSuite: robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.name">name</a></code> | <code>string</code> | The name of the simulation software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.version">version</a></code> | <code>string</code> | The version of the simulation software suite. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationSources <a name="RobomakerSimulationApplicationSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

const robomakerSimulationApplicationSources: robomakerSimulationApplication.RobomakerSimulationApplicationSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.architecture">architecture</a></code> | <code>string</code> | The target processor architecture for the application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The Amazon S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Key">s3Key</a></code> | <code>string</code> | The s3 object key. |

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

The target processor architecture for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#architecture RobomakerSimulationApplication#architecture}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The Amazon S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#s3_bucket RobomakerSimulationApplication#s3_bucket}

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

The s3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#s3_key RobomakerSimulationApplication#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### RobomakerSimulationApplicationRenderingEngineOutputReference <a name="RobomakerSimulationApplicationRenderingEngineOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

new robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RobomakerSimulationApplicationRenderingEngine;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---


### RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference <a name="RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

new robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RobomakerSimulationApplicationRobotSoftwareSuite;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---


### RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference <a name="RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

new robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RobomakerSimulationApplicationSimulationSoftwareSuite;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---


### RobomakerSimulationApplicationSourcesList <a name="RobomakerSimulationApplicationSourcesList" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

new robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get"></a>

```typescript
public get(index: number): RobomakerSimulationApplicationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RobomakerSimulationApplicationSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]

---


### RobomakerSimulationApplicationSourcesOutputReference <a name="RobomakerSimulationApplicationSourcesOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer"></a>

```typescript
import { robomakerSimulationApplication } from '@cdktn/provider-awscc'

new robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetArchitecture"></a>

```typescript
public resetArchitecture(): void
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Key"></a>

```typescript
public resetS3Key(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architectureInput">architectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architectureInput"></a>

```typescript
public readonly architectureInput: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RobomakerSimulationApplicationSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>

---



