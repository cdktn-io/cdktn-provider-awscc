# `gameliftContainerGroupDefinition` Submodule <a name="`gameliftContainerGroupDefinition` Submodule" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftContainerGroupDefinition <a name="GameliftContainerGroupDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition awscc_gamelift_container_group_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinition(scope: Construct, id: string, config: GameliftContainerGroupDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig">GameliftContainerGroupDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig">GameliftContainerGroupDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition">putGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions">putSupportContainerDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetContainerGroupType">resetContainerGroupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetGameServerContainerDefinition">resetGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSourceVersionNumber">resetSourceVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSupportContainerDefinitions">resetSupportContainerDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetVersionDescription">resetVersionDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGameServerContainerDefinition` <a name="putGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition"></a>

```typescript
public putGameServerContainerDefinition(value: GameliftContainerGroupDefinitionGameServerContainerDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---

##### `putSupportContainerDefinitions` <a name="putSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions"></a>

```typescript
public putSupportContainerDefinitions(value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags"></a>

```typescript
public putTags(value: IResolvable | GameliftContainerGroupDefinitionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>[]

---

##### `resetContainerGroupType` <a name="resetContainerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetContainerGroupType"></a>

```typescript
public resetContainerGroupType(): void
```

##### `resetGameServerContainerDefinition` <a name="resetGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetGameServerContainerDefinition"></a>

```typescript
public resetGameServerContainerDefinition(): void
```

##### `resetSourceVersionNumber` <a name="resetSourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSourceVersionNumber"></a>

```typescript
public resetSourceVersionNumber(): void
```

##### `resetSupportContainerDefinitions` <a name="resetSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSupportContainerDefinitions"></a>

```typescript
public resetSupportContainerDefinitions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVersionDescription` <a name="resetVersionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetVersionDescription"></a>

```typescript
public resetVersionDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftContainerGroupDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftContainerGroupDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftContainerGroupDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupDefinitionArn">containerGroupDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinition">gameServerContainerDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitions">supportContainerDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList">GameliftContainerGroupDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupTypeInput">containerGroupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinitionInput">gameServerContainerDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumberInput">sourceVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitionsInput">supportContainerDefinitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytesInput">totalMemoryLimitMebibytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimitInput">totalVcpuLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupType">containerGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumber">sourceVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes">totalMemoryLimitMebibytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimit">totalVcpuLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerGroupDefinitionArn`<sup>Required</sup> <a name="containerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupDefinitionArn"></a>

```typescript
public readonly containerGroupDefinitionArn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `gameServerContainerDefinition`<sup>Required</sup> <a name="gameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinition"></a>

```typescript
public readonly gameServerContainerDefinition: GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `supportContainerDefinitions`<sup>Required</sup> <a name="supportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitions"></a>

```typescript
public readonly supportContainerDefinitions: GameliftContainerGroupDefinitionSupportContainerDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tags"></a>

```typescript
public readonly tags: GameliftContainerGroupDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList">GameliftContainerGroupDefinitionTagsList</a>

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `containerGroupTypeInput`<sup>Optional</sup> <a name="containerGroupTypeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupTypeInput"></a>

```typescript
public readonly containerGroupTypeInput: string;
```

- *Type:* string

---

##### `gameServerContainerDefinitionInput`<sup>Optional</sup> <a name="gameServerContainerDefinitionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinitionInput"></a>

```typescript
public readonly gameServerContainerDefinitionInput: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `sourceVersionNumberInput`<sup>Optional</sup> <a name="sourceVersionNumberInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumberInput"></a>

```typescript
public readonly sourceVersionNumberInput: number;
```

- *Type:* number

---

##### `supportContainerDefinitionsInput`<sup>Optional</sup> <a name="supportContainerDefinitionsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitionsInput"></a>

```typescript
public readonly supportContainerDefinitionsInput: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GameliftContainerGroupDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>[]

---

##### `totalMemoryLimitMebibytesInput`<sup>Optional</sup> <a name="totalMemoryLimitMebibytesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytesInput"></a>

```typescript
public readonly totalMemoryLimitMebibytesInput: number;
```

- *Type:* number

---

##### `totalVcpuLimitInput`<sup>Optional</sup> <a name="totalVcpuLimitInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimitInput"></a>

```typescript
public readonly totalVcpuLimitInput: number;
```

- *Type:* number

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescriptionInput"></a>

```typescript
public readonly versionDescriptionInput: string;
```

- *Type:* string

---

##### `containerGroupType`<sup>Required</sup> <a name="containerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupType"></a>

```typescript
public readonly containerGroupType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `sourceVersionNumber`<sup>Required</sup> <a name="sourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumber"></a>

```typescript
public readonly sourceVersionNumber: number;
```

- *Type:* number

---

##### `totalMemoryLimitMebibytes`<sup>Required</sup> <a name="totalMemoryLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes"></a>

```typescript
public readonly totalMemoryLimitMebibytes: number;
```

- *Type:* number

---

##### `totalVcpuLimit`<sup>Required</sup> <a name="totalVcpuLimit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimit"></a>

```typescript
public readonly totalVcpuLimit: number;
```

- *Type:* number

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftContainerGroupDefinitionConfig <a name="GameliftContainerGroupDefinitionConfig" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionConfig: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.name">name</a></code> | <code>string</code> | A descriptive label for the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | The operating system of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalMemoryLimitMebibytes">totalMemoryLimitMebibytes</a></code> | <code>number</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalVcpuLimit">totalVcpuLimit</a></code> | <code>number</code> | The total amount of virtual CPUs on the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.containerGroupType">containerGroupType</a></code> | <code>string</code> | The scope of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.gameServerContainerDefinition">gameServerContainerDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | Specifies the information required to run game servers with this container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.sourceVersionNumber">sourceVersionNumber</a></code> | <code>number</code> | A specific ContainerGroupDefinition version to be updated. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.supportContainerDefinitions">supportContainerDefinitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>[]</code> | A collection of support container definitions that define the containers in this group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.versionDescription">versionDescription</a></code> | <code>string</code> | The description of this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive label for the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

The operating system of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#operating_system GameliftContainerGroupDefinition#operating_system}

---

##### `totalMemoryLimitMebibytes`<sup>Required</sup> <a name="totalMemoryLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalMemoryLimitMebibytes"></a>

```typescript
public readonly totalMemoryLimitMebibytes: number;
```

- *Type:* number

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#total_memory_limit_mebibytes GameliftContainerGroupDefinition#total_memory_limit_mebibytes}

---

##### `totalVcpuLimit`<sup>Required</sup> <a name="totalVcpuLimit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalVcpuLimit"></a>

```typescript
public readonly totalVcpuLimit: number;
```

- *Type:* number

The total amount of virtual CPUs on the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#total_vcpu_limit GameliftContainerGroupDefinition#total_vcpu_limit}

---

##### `containerGroupType`<sup>Optional</sup> <a name="containerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.containerGroupType"></a>

```typescript
public readonly containerGroupType: string;
```

- *Type:* string

The scope of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_group_type GameliftContainerGroupDefinition#container_group_type}

---

##### `gameServerContainerDefinition`<sup>Optional</sup> <a name="gameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.gameServerContainerDefinition"></a>

```typescript
public readonly gameServerContainerDefinition: GameliftContainerGroupDefinitionGameServerContainerDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

Specifies the information required to run game servers with this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#game_server_container_definition GameliftContainerGroupDefinition#game_server_container_definition}

---

##### `sourceVersionNumber`<sup>Optional</sup> <a name="sourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.sourceVersionNumber"></a>

```typescript
public readonly sourceVersionNumber: number;
```

- *Type:* number

A specific ContainerGroupDefinition version to be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#source_version_number GameliftContainerGroupDefinition#source_version_number}

---

##### `supportContainerDefinitions`<sup>Optional</sup> <a name="supportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.supportContainerDefinitions"></a>

```typescript
public readonly supportContainerDefinitions: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>[]

A collection of support container definitions that define the containers in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#support_container_definitions GameliftContainerGroupDefinition#support_container_definitions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GameliftContainerGroupDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#tags GameliftContainerGroupDefinition#tags}

---

##### `versionDescription`<sup>Optional</sup> <a name="versionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#version_description GameliftContainerGroupDefinition#version_description}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinition <a name="GameliftContainerGroupDefinitionGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionGameServerContainerDefinition: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.containerName">containerName</a></code> | <code>string</code> | A descriptive label for the container definition. Container definition names must be unique with a container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.dependsOn">dependsOn</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>[]</code> | A list of container dependencies that determines when this container starts up and shuts down. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.environmentOverride">environmentOverride</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>[]</code> | The environment variables to pass to a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.imageUri">imageUri</a></code> | <code>string</code> | Specifies the image URI of this container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.linuxCapabilities">linuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.mountPoints">mountPoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>[]</code> | A list of mount point configurations to be used in a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.portConfiguration">portConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | Defines the ports on the container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.resolvedImageDigest">resolvedImageDigest</a></code> | <code>string</code> | The digest of the container image. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.serverSdkVersion">serverSdkVersion</a></code> | <code>string</code> | The version of the server SDK used in this container group. |

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

A descriptive label for the container definition. Container definition names must be unique with a container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>[]

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

##### `environmentOverride`<sup>Optional</sup> <a name="environmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.environmentOverride"></a>

```typescript
public readonly environmentOverride: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>[]

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

##### `linuxCapabilities`<sup>Optional</sup> <a name="linuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.linuxCapabilities"></a>

```typescript
public readonly linuxCapabilities: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

##### `mountPoints`<sup>Optional</sup> <a name="mountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.mountPoints"></a>

```typescript
public readonly mountPoints: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>[]

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

##### `portConfiguration`<sup>Optional</sup> <a name="portConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.portConfiguration"></a>

```typescript
public readonly portConfiguration: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

##### `resolvedImageDigest`<sup>Optional</sup> <a name="resolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.resolvedImageDigest"></a>

```typescript
public readonly resolvedImageDigest: string;
```

- *Type:* string

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

##### `serverSdkVersion`<sup>Optional</sup> <a name="serverSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.serverSdkVersion"></a>

```typescript
public readonly serverSdkVersion: string;
```

- *Type:* string

The version of the server SDK used in this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#server_sdk_version GameliftContainerGroupDefinition#server_sdk_version}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.condition">condition</a></code> | <code>string</code> | The type of dependency. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.containerName">containerName</a></code> | <code>string</code> | A descriptive label for the container definition. The container being defined depends on this container's condition. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

A descriptive label for the container definition. The container being defined depends on this container's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.name">name</a></code> | <code>string</code> | The environment variable name. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.value">value</a></code> | <code>string</code> | The environment variable value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The environment variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The environment variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.property.include">include</a></code> | <code>string[]</code> | The list of Linux capabilities to add to the container's default configuration. |

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.accessLevel">accessLevel</a></code> | <code>string</code> | The access permissions for the mounted path. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.containerPath">containerPath</a></code> | <code>string</code> | The path inside the container where the mount is accessible. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.instancePath">instancePath</a></code> | <code>string</code> | The path on the host that will be mounted in the container. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

The access permissions for the mounted path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

The path inside the container where the mount is accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}

---

##### `instancePath`<sup>Optional</sup> <a name="instancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.instancePath"></a>

```typescript
public readonly instancePath: string;
```

- *Type:* string

The path on the host that will be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.property.containerPortRanges">containerPortRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>[]</code> | Specifies one or more ranges of ports on a container. |

---

##### `containerPortRanges`<sup>Optional</sup> <a name="containerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.property.containerPortRanges"></a>

```typescript
public readonly containerPortRanges: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>[]

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.fromPort">fromPort</a></code> | <code>number</code> | A starting value for the range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.protocol">protocol</a></code> | <code>string</code> | Defines the protocol of these ports. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.toPort">toPort</a></code> | <code>number</code> | An ending value for the range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

A starting value for the range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Defines the protocol of these ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

An ending value for the range of allowed port numbers.

Port numbers are end-inclusive. This value must be equal to or greater than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitions <a name="GameliftContainerGroupDefinitionSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionSupportContainerDefinitions: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.containerName">containerName</a></code> | <code>string</code> | A descriptive label for the container definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.dependsOn">dependsOn</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>[]</code> | A list of container dependencies that determines when this container starts up and shuts down. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.environmentOverride">environmentOverride</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>[]</code> | The environment variables to pass to a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.essential">essential</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies if the container is essential. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | Specifies how the health of the containers will be checked. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.imageUri">imageUri</a></code> | <code>string</code> | Specifies the image URI of this container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.linuxCapabilities">linuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.memoryHardLimitMebibytes">memoryHardLimitMebibytes</a></code> | <code>number</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.mountPoints">mountPoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>[]</code> | A list of mount point configurations to be used in a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.portConfiguration">portConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | Defines the ports on the container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.resolvedImageDigest">resolvedImageDigest</a></code> | <code>string</code> | The digest of the container image. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.vcpu">vcpu</a></code> | <code>number</code> | The number of virtual CPUs to give to the support group. |

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

A descriptive label for the container definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.dependsOn"></a>

```typescript
public readonly dependsOn: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>[]

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

##### `environmentOverride`<sup>Optional</sup> <a name="environmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.environmentOverride"></a>

```typescript
public readonly environmentOverride: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>[]

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies if the container is essential.

If an essential container fails a health check, then all containers in the container group will be restarted. You must specify exactly 1 essential container in a container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#essential GameliftContainerGroupDefinition#essential}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.healthCheck"></a>

```typescript
public readonly healthCheck: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

Specifies how the health of the containers will be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#health_check GameliftContainerGroupDefinition#health_check}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

##### `linuxCapabilities`<sup>Optional</sup> <a name="linuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.linuxCapabilities"></a>

```typescript
public readonly linuxCapabilities: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

##### `memoryHardLimitMebibytes`<sup>Optional</sup> <a name="memoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.memoryHardLimitMebibytes"></a>

```typescript
public readonly memoryHardLimitMebibytes: number;
```

- *Type:* number

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#memory_hard_limit_mebibytes GameliftContainerGroupDefinition#memory_hard_limit_mebibytes}

---

##### `mountPoints`<sup>Optional</sup> <a name="mountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.mountPoints"></a>

```typescript
public readonly mountPoints: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>[]

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

##### `portConfiguration`<sup>Optional</sup> <a name="portConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.portConfiguration"></a>

```typescript
public readonly portConfiguration: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

##### `resolvedImageDigest`<sup>Optional</sup> <a name="resolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.resolvedImageDigest"></a>

```typescript
public readonly resolvedImageDigest: string;
```

- *Type:* string

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

##### `vcpu`<sup>Optional</sup> <a name="vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.vcpu"></a>

```typescript
public readonly vcpu: number;
```

- *Type:* number

The number of virtual CPUs to give to the support group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#vcpu GameliftContainerGroupDefinition#vcpu}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.condition">condition</a></code> | <code>string</code> | The type of dependency. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.containerName">containerName</a></code> | <code>string</code> | A descriptive label for the container definition. The container being defined depends on this container's condition. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

A descriptive label for the container definition. The container being defined depends on this container's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.name">name</a></code> | <code>string</code> | The environment variable name. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.value">value</a></code> | <code>string</code> | The environment variable value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The environment variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The environment variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.command">command</a></code> | <code>string[]</code> | A string array representing the command that the container runs to determine if it is healthy. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.interval">interval</a></code> | <code>number</code> | How often (in seconds) the health is checked. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.retries">retries</a></code> | <code>number</code> | How many times the process manager will retry the command after a timeout. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.startPeriod">startPeriod</a></code> | <code>number</code> | The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.timeout">timeout</a></code> | <code>number</code> | How many seconds the process manager allows the command to run before canceling it. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

A string array representing the command that the container runs to determine if it is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#command GameliftContainerGroupDefinition#command}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

How often (in seconds) the health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#interval GameliftContainerGroupDefinition#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

How many times the process manager will retry the command after a timeout.

(The first run of the command does not count as a retry.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#retries GameliftContainerGroupDefinition#retries}

---

##### `startPeriod`<sup>Optional</sup> <a name="startPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.startPeriod"></a>

```typescript
public readonly startPeriod: number;
```

- *Type:* number

The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#start_period GameliftContainerGroupDefinition#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

How many seconds the process manager allows the command to run before canceling it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#timeout GameliftContainerGroupDefinition#timeout}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.property.include">include</a></code> | <code>string[]</code> | The list of Linux capabilities to add to the container's default configuration. |

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.accessLevel">accessLevel</a></code> | <code>string</code> | The access permissions for the mounted path. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.containerPath">containerPath</a></code> | <code>string</code> | The path inside the container where the mount is accessible. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.instancePath">instancePath</a></code> | <code>string</code> | The path on the host that will be mounted in the container. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

The access permissions for the mounted path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

The path inside the container where the mount is accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}

---

##### `instancePath`<sup>Optional</sup> <a name="instancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.instancePath"></a>

```typescript
public readonly instancePath: string;
```

- *Type:* string

The path on the host that will be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.property.containerPortRanges">containerPortRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>[]</code> | Specifies one or more ranges of ports on a container. |

---

##### `containerPortRanges`<sup>Optional</sup> <a name="containerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.property.containerPortRanges"></a>

```typescript
public readonly containerPortRanges: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>[]

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.fromPort">fromPort</a></code> | <code>number</code> | A starting value for the range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.protocol">protocol</a></code> | <code>string</code> | Defines the protocol of these ports. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.toPort">toPort</a></code> | <code>number</code> | An ending value for the range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

A starting value for the range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Defines the protocol of these ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

An ending value for the range of allowed port numbers.

Port numbers are end-inclusive. This value must be equal to or greater than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}

---

### GameliftContainerGroupDefinitionTags <a name="GameliftContainerGroupDefinitionTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

const gameliftContainerGroupDefinitionTags: gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#key GameliftContainerGroupDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>[]

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>[]

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>[]

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetInstancePath">resetInstancePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetContainerPath"></a>

```typescript
public resetContainerPath(): void
```

##### `resetInstancePath` <a name="resetInstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetInstancePath"></a>

```typescript
public resetInstancePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePathInput">instancePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath">instancePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPathInput"></a>

```typescript
public readonly containerPathInput: string;
```

- *Type:* string

---

##### `instancePathInput`<sup>Optional</sup> <a name="instancePathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePathInput"></a>

```typescript
public readonly instancePathInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `instancePath`<sup>Required</sup> <a name="instancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath"></a>

```typescript
public readonly instancePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn">putDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride">putEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities">putLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints">putMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration">putPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetEnvironmentOverride">resetEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetLinuxCapabilities">resetLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetMountPoints">resetMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetPortConfiguration">resetPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetResolvedImageDigest">resetResolvedImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetServerSdkVersion">resetServerSdkVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependsOn` <a name="putDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn"></a>

```typescript
public putDependsOn(value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>[]

---

##### `putEnvironmentOverride` <a name="putEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride"></a>

```typescript
public putEnvironmentOverride(value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>[]

---

##### `putLinuxCapabilities` <a name="putLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities"></a>

```typescript
public putLinuxCapabilities(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---

##### `putMountPoints` <a name="putMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints"></a>

```typescript
public putMountPoints(value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>[]

---

##### `putPortConfiguration` <a name="putPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration"></a>

```typescript
public putPortConfiguration(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetDependsOn"></a>

```typescript
public resetDependsOn(): void
```

##### `resetEnvironmentOverride` <a name="resetEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetEnvironmentOverride"></a>

```typescript
public resetEnvironmentOverride(): void
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetImageUri"></a>

```typescript
public resetImageUri(): void
```

##### `resetLinuxCapabilities` <a name="resetLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetLinuxCapabilities"></a>

```typescript
public resetLinuxCapabilities(): void
```

##### `resetMountPoints` <a name="resetMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetMountPoints"></a>

```typescript
public resetMountPoints(): void
```

##### `resetPortConfiguration` <a name="resetPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetPortConfiguration"></a>

```typescript
public resetPortConfiguration(): void
```

##### `resetResolvedImageDigest` <a name="resetResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetResolvedImageDigest"></a>

```typescript
public resetResolvedImageDigest(): void
```

##### `resetServerSdkVersion` <a name="resetServerSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetServerSdkVersion"></a>

```typescript
public resetServerSdkVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn">dependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride">environmentOverride</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities">linuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints">mountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration">portConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverrideInput">environmentOverrideInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilitiesInput">linuxCapabilitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPointsInput">mountPointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfigurationInput">portConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigestInput">resolvedImageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersionInput">serverSdkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest">resolvedImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion">serverSdkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a>

---

##### `environmentOverride`<sup>Required</sup> <a name="environmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride"></a>

```typescript
public readonly environmentOverride: GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a>

---

##### `linuxCapabilities`<sup>Required</sup> <a name="linuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities"></a>

```typescript
public readonly linuxCapabilities: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a>

---

##### `mountPoints`<sup>Required</sup> <a name="mountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints"></a>

```typescript
public readonly mountPoints: GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a>

---

##### `portConfiguration`<sup>Required</sup> <a name="portConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration"></a>

```typescript
public readonly portConfiguration: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a>

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOnInput"></a>

```typescript
public readonly dependsOnInput: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>[]

---

##### `environmentOverrideInput`<sup>Optional</sup> <a name="environmentOverrideInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverrideInput"></a>

```typescript
public readonly environmentOverrideInput: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>[]

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `linuxCapabilitiesInput`<sup>Optional</sup> <a name="linuxCapabilitiesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilitiesInput"></a>

```typescript
public readonly linuxCapabilitiesInput: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---

##### `mountPointsInput`<sup>Optional</sup> <a name="mountPointsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPointsInput"></a>

```typescript
public readonly mountPointsInput: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>[]

---

##### `portConfigurationInput`<sup>Optional</sup> <a name="portConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfigurationInput"></a>

```typescript
public readonly portConfigurationInput: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---

##### `resolvedImageDigestInput`<sup>Optional</sup> <a name="resolvedImageDigestInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigestInput"></a>

```typescript
public readonly resolvedImageDigestInput: string;
```

- *Type:* string

---

##### `serverSdkVersionInput`<sup>Optional</sup> <a name="serverSdkVersionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersionInput"></a>

```typescript
public readonly serverSdkVersionInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `resolvedImageDigest`<sup>Required</sup> <a name="resolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest"></a>

```typescript
public readonly resolvedImageDigest: string;
```

- *Type:* string

---

##### `serverSdkVersion`<sup>Required</sup> <a name="serverSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion"></a>

```typescript
public readonly serverSdkVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>[]

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges">putContainerPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resetContainerPortRanges">resetContainerPortRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerPortRanges` <a name="putContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges"></a>

```typescript
public putContainerPortRanges(value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>[]

---

##### `resetContainerPortRanges` <a name="resetContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resetContainerPortRanges"></a>

```typescript
public resetContainerPortRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges">containerPortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRangesInput">containerPortRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPortRanges`<sup>Required</sup> <a name="containerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges"></a>

```typescript
public readonly containerPortRanges: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a>

---

##### `containerPortRangesInput`<sup>Optional</sup> <a name="containerPortRangesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRangesInput"></a>

```typescript
public readonly containerPortRangesInput: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>[]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>[]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetStartPeriod">resetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetStartPeriod` <a name="resetStartPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetStartPeriod"></a>

```typescript
public resetStartPeriod(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriodInput">startPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `startPeriodInput`<sup>Optional</sup> <a name="startPeriodInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriodInput"></a>

```typescript
public readonly startPeriodInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```typescript
public readonly startPeriod: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>[]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>[]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetInstancePath">resetInstancePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetContainerPath"></a>

```typescript
public resetContainerPath(): void
```

##### `resetInstancePath` <a name="resetInstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetInstancePath"></a>

```typescript
public resetInstancePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePathInput">instancePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath">instancePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPathInput"></a>

```typescript
public readonly containerPathInput: string;
```

- *Type:* string

---

##### `instancePathInput`<sup>Optional</sup> <a name="instancePathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePathInput"></a>

```typescript
public readonly instancePathInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `instancePath`<sup>Required</sup> <a name="instancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath"></a>

```typescript
public readonly instancePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn">putDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride">putEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities">putLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints">putMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration">putPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEnvironmentOverride">resetEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetLinuxCapabilities">resetLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMemoryHardLimitMebibytes">resetMemoryHardLimitMebibytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMountPoints">resetMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetPortConfiguration">resetPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetResolvedImageDigest">resetResolvedImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetVcpu">resetVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependsOn` <a name="putDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn"></a>

```typescript
public putDependsOn(value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>[]

---

##### `putEnvironmentOverride` <a name="putEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride"></a>

```typescript
public putEnvironmentOverride(value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>[]

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck"></a>

```typescript
public putHealthCheck(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---

##### `putLinuxCapabilities` <a name="putLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities"></a>

```typescript
public putLinuxCapabilities(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---

##### `putMountPoints` <a name="putMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints"></a>

```typescript
public putMountPoints(value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>[]

---

##### `putPortConfiguration` <a name="putPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration"></a>

```typescript
public putPortConfiguration(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetDependsOn"></a>

```typescript
public resetDependsOn(): void
```

##### `resetEnvironmentOverride` <a name="resetEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEnvironmentOverride"></a>

```typescript
public resetEnvironmentOverride(): void
```

##### `resetEssential` <a name="resetEssential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEssential"></a>

```typescript
public resetEssential(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetImageUri"></a>

```typescript
public resetImageUri(): void
```

##### `resetLinuxCapabilities` <a name="resetLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetLinuxCapabilities"></a>

```typescript
public resetLinuxCapabilities(): void
```

##### `resetMemoryHardLimitMebibytes` <a name="resetMemoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMemoryHardLimitMebibytes"></a>

```typescript
public resetMemoryHardLimitMebibytes(): void
```

##### `resetMountPoints` <a name="resetMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMountPoints"></a>

```typescript
public resetMountPoints(): void
```

##### `resetPortConfiguration` <a name="resetPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetPortConfiguration"></a>

```typescript
public resetPortConfiguration(): void
```

##### `resetResolvedImageDigest` <a name="resetResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetResolvedImageDigest"></a>

```typescript
public resetResolvedImageDigest(): void
```

##### `resetVcpu` <a name="resetVcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetVcpu"></a>

```typescript
public resetVcpu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn">dependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride">environmentOverride</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities">linuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints">mountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration">portConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverrideInput">environmentOverrideInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essentialInput">essentialInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilitiesInput">linuxCapabilitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytesInput">memoryHardLimitMebibytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPointsInput">mountPointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfigurationInput">portConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigestInput">resolvedImageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpuInput">vcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential">essential</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes">memoryHardLimitMebibytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest">resolvedImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu">vcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a>

---

##### `environmentOverride`<sup>Required</sup> <a name="environmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride"></a>

```typescript
public readonly environmentOverride: GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a>

---

##### `linuxCapabilities`<sup>Required</sup> <a name="linuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities"></a>

```typescript
public readonly linuxCapabilities: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a>

---

##### `mountPoints`<sup>Required</sup> <a name="mountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints"></a>

```typescript
public readonly mountPoints: GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a>

---

##### `portConfiguration`<sup>Required</sup> <a name="portConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration"></a>

```typescript
public readonly portConfiguration: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a>

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOnInput"></a>

```typescript
public readonly dependsOnInput: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>[]

---

##### `environmentOverrideInput`<sup>Optional</sup> <a name="environmentOverrideInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverrideInput"></a>

```typescript
public readonly environmentOverrideInput: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>[]

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essentialInput"></a>

```typescript
public readonly essentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `linuxCapabilitiesInput`<sup>Optional</sup> <a name="linuxCapabilitiesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilitiesInput"></a>

```typescript
public readonly linuxCapabilitiesInput: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---

##### `memoryHardLimitMebibytesInput`<sup>Optional</sup> <a name="memoryHardLimitMebibytesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytesInput"></a>

```typescript
public readonly memoryHardLimitMebibytesInput: number;
```

- *Type:* number

---

##### `mountPointsInput`<sup>Optional</sup> <a name="mountPointsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPointsInput"></a>

```typescript
public readonly mountPointsInput: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>[]

---

##### `portConfigurationInput`<sup>Optional</sup> <a name="portConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfigurationInput"></a>

```typescript
public readonly portConfigurationInput: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---

##### `resolvedImageDigestInput`<sup>Optional</sup> <a name="resolvedImageDigestInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigestInput"></a>

```typescript
public readonly resolvedImageDigestInput: string;
```

- *Type:* string

---

##### `vcpuInput`<sup>Optional</sup> <a name="vcpuInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpuInput"></a>

```typescript
public readonly vcpuInput: number;
```

- *Type:* number

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `memoryHardLimitMebibytes`<sup>Required</sup> <a name="memoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes"></a>

```typescript
public readonly memoryHardLimitMebibytes: number;
```

- *Type:* number

---

##### `resolvedImageDigest`<sup>Required</sup> <a name="resolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest"></a>

```typescript
public readonly resolvedImageDigest: string;
```

- *Type:* string

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu"></a>

```typescript
public readonly vcpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>[]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges">putContainerPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resetContainerPortRanges">resetContainerPortRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerPortRanges` <a name="putContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges"></a>

```typescript
public putContainerPortRanges(value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>[]

---

##### `resetContainerPortRanges` <a name="resetContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resetContainerPortRanges"></a>

```typescript
public resetContainerPortRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges">containerPortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRangesInput">containerPortRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPortRanges`<sup>Required</sup> <a name="containerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges"></a>

```typescript
public readonly containerPortRanges: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a>

---

##### `containerPortRangesInput`<sup>Optional</sup> <a name="containerPortRangesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRangesInput"></a>

```typescript
public readonly containerPortRangesInput: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---


### GameliftContainerGroupDefinitionTagsList <a name="GameliftContainerGroupDefinitionTagsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get"></a>

```typescript
public get(index: number): GameliftContainerGroupDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>[]

---


### GameliftContainerGroupDefinitionTagsOutputReference <a name="GameliftContainerGroupDefinitionTagsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { gameliftContainerGroupDefinition } from '@cdktn/provider-awscc'

new gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerGroupDefinitionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>

---



