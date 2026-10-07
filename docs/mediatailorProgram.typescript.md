# `mediatailorProgram` Submodule <a name="`mediatailorProgram` Submodule" id="@cdktn/provider-awscc.mediatailorProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorProgram <a name="MediatailorProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program awscc_mediatailor_program}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgram(scope: Construct, id: string, config: MediatailorProgramConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig">MediatailorProgramConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig">MediatailorProgramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks">putAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia">putAudienceMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration">putScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAdBreaks">resetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAudienceMedia">resetAudienceMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetLiveSourceName">resetLiveSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetScheduleConfiguration">resetScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdBreaks` <a name="putAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks"></a>

```typescript
public putAdBreaks(value: IResolvable | MediatailorProgramAdBreaks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>[]

---

##### `putAudienceMedia` <a name="putAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia"></a>

```typescript
public putAudienceMedia(value: IResolvable | MediatailorProgramAudienceMedia[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>[]

---

##### `putScheduleConfiguration` <a name="putScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration"></a>

```typescript
public putScheduleConfiguration(value: MediatailorProgramScheduleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---

##### `resetAdBreaks` <a name="resetAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAdBreaks"></a>

```typescript
public resetAdBreaks(): void
```

##### `resetAudienceMedia` <a name="resetAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAudienceMedia"></a>

```typescript
public resetAudienceMedia(): void
```

##### `resetLiveSourceName` <a name="resetLiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetLiveSourceName"></a>

```typescript
public resetLiveSourceName(): void
```

##### `resetScheduleConfiguration` <a name="resetScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetScheduleConfiguration"></a>

```typescript
public resetScheduleConfiguration(): void
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetVodSourceName"></a>

```typescript
public resetVodSourceName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

mediatailorProgram.MediatailorProgram.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

mediatailorProgram.MediatailorProgram.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

mediatailorProgram.MediatailorProgram.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

mediatailorProgram.MediatailorProgram.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediatailorProgram to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediatailorProgram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorProgram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaks">adBreaks</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList">MediatailorProgramAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMedia">audienceMedia</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList">MediatailorProgramAudienceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference">MediatailorProgramClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.durationMillis">durationMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference">MediatailorProgramScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduledStartTime">scheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaksInput">adBreaksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMediaInput">audienceMediaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceNameInput">liveSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programNameInput">programNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfigurationInput">scheduleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceName">liveSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programName">programName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `adBreaks`<sup>Required</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaks"></a>

```typescript
public readonly adBreaks: MediatailorProgramAdBreaksList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList">MediatailorProgramAdBreaksList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `audienceMedia`<sup>Required</sup> <a name="audienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMedia"></a>

```typescript
public readonly audienceMedia: MediatailorProgramAudienceMediaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList">MediatailorProgramAudienceMediaList</a>

---

##### `clipRange`<sup>Required</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.clipRange"></a>

```typescript
public readonly clipRange: MediatailorProgramClipRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference">MediatailorProgramClipRangeOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `durationMillis`<sup>Required</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.durationMillis"></a>

```typescript
public readonly durationMillis: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfiguration"></a>

```typescript
public readonly scheduleConfiguration: MediatailorProgramScheduleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference">MediatailorProgramScheduleConfigurationOutputReference</a>

---

##### `scheduledStartTime`<sup>Required</sup> <a name="scheduledStartTime" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduledStartTime"></a>

```typescript
public readonly scheduledStartTime: string;
```

- *Type:* string

---

##### `adBreaksInput`<sup>Optional</sup> <a name="adBreaksInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaksInput"></a>

```typescript
public readonly adBreaksInput: IResolvable | MediatailorProgramAdBreaks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>[]

---

##### `audienceMediaInput`<sup>Optional</sup> <a name="audienceMediaInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMediaInput"></a>

```typescript
public readonly audienceMediaInput: IResolvable | MediatailorProgramAudienceMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>[]

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `liveSourceNameInput`<sup>Optional</sup> <a name="liveSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceNameInput"></a>

```typescript
public readonly liveSourceNameInput: string;
```

- *Type:* string

---

##### `programNameInput`<sup>Optional</sup> <a name="programNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programNameInput"></a>

```typescript
public readonly programNameInput: string;
```

- *Type:* string

---

##### `scheduleConfigurationInput`<sup>Optional</sup> <a name="scheduleConfigurationInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfigurationInput"></a>

```typescript
public readonly scheduleConfigurationInput: IResolvable | MediatailorProgramScheduleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationNameInput"></a>

```typescript
public readonly sourceLocationNameInput: string;
```

- *Type:* string

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceNameInput"></a>

```typescript
public readonly vodSourceNameInput: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `liveSourceName`<sup>Required</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceName"></a>

```typescript
public readonly liveSourceName: string;
```

- *Type:* string

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorProgramAdBreaks <a name="MediatailorProgramAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAdBreaks: mediatailorProgram.MediatailorProgramAdBreaks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.adBreakMetadata">adBreakMetadata</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>[]</code> | Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.messageType">messageType</a></code> | <code>string</code> | The SCTE-35 ad insertion type. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.offsetMillis">offsetMillis</a></code> | <code>number</code> | How long (in milliseconds) after the beginning of the program that an ad starts. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | Slate VOD source configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.spliceInsertMessage">spliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | Splice insert message configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.timeSignalMessage">timeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | The SCTE-35 time_signal message configuration. |

---

##### `adBreakMetadata`<sup>Optional</sup> <a name="adBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.adBreakMetadata"></a>

```typescript
public readonly adBreakMetadata: IResolvable | MediatailorProgramAdBreaksAdBreakMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>[]

Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

The SCTE-35 ad insertion type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}

---

##### `offsetMillis`<sup>Optional</sup> <a name="offsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.offsetMillis"></a>

```typescript
public readonly offsetMillis: number;
```

- *Type:* number

How long (in milliseconds) after the beginning of the program that an ad starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}

---

##### `slate`<sup>Optional</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.slate"></a>

```typescript
public readonly slate: MediatailorProgramAdBreaksSlate;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

Slate VOD source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}

---

##### `spliceInsertMessage`<sup>Optional</sup> <a name="spliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.spliceInsertMessage"></a>

```typescript
public readonly spliceInsertMessage: MediatailorProgramAdBreaksSpliceInsertMessage;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

Splice insert message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}

---

##### `timeSignalMessage`<sup>Optional</sup> <a name="timeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.timeSignalMessage"></a>

```typescript
public readonly timeSignalMessage: MediatailorProgramAdBreaksTimeSignalMessage;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

The SCTE-35 time_signal message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}

---

### MediatailorProgramAdBreaksAdBreakMetadata <a name="MediatailorProgramAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAdBreaksAdBreakMetadata: mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.key">key</a></code> | <code>string</code> | The key. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.value">value</a></code> | <code>string</code> | The value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#key MediatailorProgram#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#value MediatailorProgram#value}

---

### MediatailorProgramAdBreaksSlate <a name="MediatailorProgramAdBreaksSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAdBreaksSlate: mediatailorProgram.MediatailorProgramAdBreaksSlate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The name of the source location where the slate VOD source is stored. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | The slate VOD source name. |

---

##### `sourceLocationName`<sup>Optional</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAdBreaksSpliceInsertMessage <a name="MediatailorProgramAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAdBreaksSpliceInsertMessage: mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availNum">availNum</a></code> | <code>number</code> | This is written to splice_insert.avail_num. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availsExpected">availsExpected</a></code> | <code>number</code> | This is written to splice_insert.avails_expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.spliceEventId">spliceEventId</a></code> | <code>number</code> | This is written to splice_insert.splice_event_id. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.uniqueProgramId">uniqueProgramId</a></code> | <code>number</code> | This is written to splice_insert.unique_program_id. |

---

##### `availNum`<sup>Optional</sup> <a name="availNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availNum"></a>

```typescript
public readonly availNum: number;
```

- *Type:* number

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

##### `availsExpected`<sup>Optional</sup> <a name="availsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availsExpected"></a>

```typescript
public readonly availsExpected: number;
```

- *Type:* number

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

##### `spliceEventId`<sup>Optional</sup> <a name="spliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.spliceEventId"></a>

```typescript
public readonly spliceEventId: number;
```

- *Type:* number

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

##### `uniqueProgramId`<sup>Optional</sup> <a name="uniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.uniqueProgramId"></a>

```typescript
public readonly uniqueProgramId: number;
```

- *Type:* number

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

### MediatailorProgramAdBreaksTimeSignalMessage <a name="MediatailorProgramAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAdBreaksTimeSignalMessage: mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.property.segmentationDescriptors">segmentationDescriptors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]</code> | The configurations for the SCTE-35 segmentation_descriptor message(s). |

---

##### `segmentationDescriptors`<sup>Optional</sup> <a name="segmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.property.segmentationDescriptors"></a>

```typescript
public readonly segmentationDescriptors: IResolvable | MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors: mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId">segmentationEventId</a></code> | <code>number</code> | The Event Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId">segmentationTypeId</a></code> | <code>number</code> | The Type Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid">segmentationUpid</a></code> | <code>string</code> | The Upid to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType">segmentationUpidType</a></code> | <code>number</code> | The Upid Type to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum">segmentNum</a></code> | <code>number</code> | The segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected">segmentsExpected</a></code> | <code>number</code> | The number of segments expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum">subSegmentNum</a></code> | <code>number</code> | The sub-segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected">subSegmentsExpected</a></code> | <code>number</code> | The number of sub-segments expected. |

---

##### `segmentationEventId`<sup>Optional</sup> <a name="segmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId"></a>

```typescript
public readonly segmentationEventId: number;
```

- *Type:* number

The Event Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}

---

##### `segmentationTypeId`<sup>Optional</sup> <a name="segmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId"></a>

```typescript
public readonly segmentationTypeId: number;
```

- *Type:* number

The Type Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}

---

##### `segmentationUpid`<sup>Optional</sup> <a name="segmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid"></a>

```typescript
public readonly segmentationUpid: string;
```

- *Type:* string

The Upid to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}

---

##### `segmentationUpidType`<sup>Optional</sup> <a name="segmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType"></a>

```typescript
public readonly segmentationUpidType: number;
```

- *Type:* number

The Upid Type to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}

---

##### `segmentNum`<sup>Optional</sup> <a name="segmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum"></a>

```typescript
public readonly segmentNum: number;
```

- *Type:* number

The segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}

---

##### `segmentsExpected`<sup>Optional</sup> <a name="segmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected"></a>

```typescript
public readonly segmentsExpected: number;
```

- *Type:* number

The number of segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}

---

##### `subSegmentNum`<sup>Optional</sup> <a name="subSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum"></a>

```typescript
public readonly subSegmentNum: number;
```

- *Type:* number

The sub-segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}

---

##### `subSegmentsExpected`<sup>Optional</sup> <a name="subSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected"></a>

```typescript
public readonly subSegmentsExpected: number;
```

- *Type:* number

The number of sub-segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}

---

### MediatailorProgramAudienceMedia <a name="MediatailorProgramAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMedia: mediatailorProgram.MediatailorProgramAudienceMedia = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.alternateMedia">alternateMedia</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>[]</code> | The list of AlternateMedia defined in AudienceMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.audience">audience</a></code> | <code>string</code> | The Audience defined in AudienceMedia. |

---

##### `alternateMedia`<sup>Optional</sup> <a name="alternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.alternateMedia"></a>

```typescript
public readonly alternateMedia: IResolvable | MediatailorProgramAudienceMediaAlternateMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>[]

The list of AlternateMedia defined in AudienceMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#alternate_media MediatailorProgram#alternate_media}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

The Audience defined in AudienceMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience MediatailorProgram#audience}

---

### MediatailorProgramAudienceMediaAlternateMedia <a name="MediatailorProgramAudienceMediaAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMediaAlternateMedia: mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.adBreaks">adBreaks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>[]</code> | Ad break configuration parameters defined in AlternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | Clip range configuration for the VOD source associated with the program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.durationMillis">durationMillis</a></code> | <code>number</code> | The duration of the alternateMedia in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.liveSourceName">liveSourceName</a></code> | <code>string</code> | The name of the live source for alternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.scheduledStartTimeMillis">scheduledStartTimeMillis</a></code> | <code>number</code> | The date and time that the alternateMedia is scheduled to start, in epoch milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The name of the source location for alternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | The name of the VOD source for alternateMedia. |

---

##### `adBreaks`<sup>Optional</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.adBreaks"></a>

```typescript
public readonly adBreaks: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>[]

Ad break configuration parameters defined in AlternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `clipRange`<sup>Optional</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.clipRange"></a>

```typescript
public readonly clipRange: MediatailorProgramAudienceMediaAlternateMediaClipRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

##### `durationMillis`<sup>Optional</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.durationMillis"></a>

```typescript
public readonly durationMillis: number;
```

- *Type:* number

The duration of the alternateMedia in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

##### `liveSourceName`<sup>Optional</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.liveSourceName"></a>

```typescript
public readonly liveSourceName: string;
```

- *Type:* string

The name of the live source for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `scheduledStartTimeMillis`<sup>Optional</sup> <a name="scheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.scheduledStartTimeMillis"></a>

```typescript
public readonly scheduledStartTimeMillis: number;
```

- *Type:* number

The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

##### `sourceLocationName`<sup>Optional</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The name of the source location for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

The name of the VOD source for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaks <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMediaAlternateMediaAdBreaks: mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.adBreakMetadata">adBreakMetadata</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>[]</code> | Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.messageType">messageType</a></code> | <code>string</code> | The SCTE-35 ad insertion type. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.offsetMillis">offsetMillis</a></code> | <code>number</code> | How long (in milliseconds) after the beginning of the program that an ad starts. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | Slate VOD source configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.spliceInsertMessage">spliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | Splice insert message configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.timeSignalMessage">timeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | The SCTE-35 time_signal message configuration. |

---

##### `adBreakMetadata`<sup>Optional</sup> <a name="adBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.adBreakMetadata"></a>

```typescript
public readonly adBreakMetadata: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>[]

Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

The SCTE-35 ad insertion type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}

---

##### `offsetMillis`<sup>Optional</sup> <a name="offsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.offsetMillis"></a>

```typescript
public readonly offsetMillis: number;
```

- *Type:* number

How long (in milliseconds) after the beginning of the program that an ad starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}

---

##### `slate`<sup>Optional</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.slate"></a>

```typescript
public readonly slate: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

Slate VOD source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}

---

##### `spliceInsertMessage`<sup>Optional</sup> <a name="spliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.spliceInsertMessage"></a>

```typescript
public readonly spliceInsertMessage: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

Splice insert message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}

---

##### `timeSignalMessage`<sup>Optional</sup> <a name="timeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.timeSignalMessage"></a>

```typescript
public readonly timeSignalMessage: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

The SCTE-35 time_signal message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata: mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.key">key</a></code> | <code>string</code> | The key. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.value">value</a></code> | <code>string</code> | The value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#key MediatailorProgram#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#value MediatailorProgram#value}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate: mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The name of the source location where the slate VOD source is stored. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | The slate VOD source name. |

---

##### `sourceLocationName`<sup>Optional</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage: mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availNum">availNum</a></code> | <code>number</code> | This is written to splice_insert.avail_num. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availsExpected">availsExpected</a></code> | <code>number</code> | This is written to splice_insert.avails_expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.spliceEventId">spliceEventId</a></code> | <code>number</code> | This is written to splice_insert.splice_event_id. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.uniqueProgramId">uniqueProgramId</a></code> | <code>number</code> | This is written to splice_insert.unique_program_id. |

---

##### `availNum`<sup>Optional</sup> <a name="availNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availNum"></a>

```typescript
public readonly availNum: number;
```

- *Type:* number

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

##### `availsExpected`<sup>Optional</sup> <a name="availsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availsExpected"></a>

```typescript
public readonly availsExpected: number;
```

- *Type:* number

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

##### `spliceEventId`<sup>Optional</sup> <a name="spliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.spliceEventId"></a>

```typescript
public readonly spliceEventId: number;
```

- *Type:* number

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

##### `uniqueProgramId`<sup>Optional</sup> <a name="uniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.uniqueProgramId"></a>

```typescript
public readonly uniqueProgramId: number;
```

- *Type:* number

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage: mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.property.segmentationDescriptors">segmentationDescriptors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]</code> | The configurations for the SCTE-35 segmentation_descriptor message(s). |

---

##### `segmentationDescriptors`<sup>Optional</sup> <a name="segmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.property.segmentationDescriptors"></a>

```typescript
public readonly segmentationDescriptors: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors: mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId">segmentationEventId</a></code> | <code>number</code> | The Event Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId">segmentationTypeId</a></code> | <code>number</code> | The Type Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid">segmentationUpid</a></code> | <code>string</code> | The Upid to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType">segmentationUpidType</a></code> | <code>number</code> | The Upid Type to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum">segmentNum</a></code> | <code>number</code> | The segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected">segmentsExpected</a></code> | <code>number</code> | The number of segments expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum">subSegmentNum</a></code> | <code>number</code> | The sub-segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected">subSegmentsExpected</a></code> | <code>number</code> | The number of sub-segments expected. |

---

##### `segmentationEventId`<sup>Optional</sup> <a name="segmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId"></a>

```typescript
public readonly segmentationEventId: number;
```

- *Type:* number

The Event Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}

---

##### `segmentationTypeId`<sup>Optional</sup> <a name="segmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId"></a>

```typescript
public readonly segmentationTypeId: number;
```

- *Type:* number

The Type Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}

---

##### `segmentationUpid`<sup>Optional</sup> <a name="segmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid"></a>

```typescript
public readonly segmentationUpid: string;
```

- *Type:* string

The Upid to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}

---

##### `segmentationUpidType`<sup>Optional</sup> <a name="segmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType"></a>

```typescript
public readonly segmentationUpidType: number;
```

- *Type:* number

The Upid Type to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}

---

##### `segmentNum`<sup>Optional</sup> <a name="segmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum"></a>

```typescript
public readonly segmentNum: number;
```

- *Type:* number

The segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}

---

##### `segmentsExpected`<sup>Optional</sup> <a name="segmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected"></a>

```typescript
public readonly segmentsExpected: number;
```

- *Type:* number

The number of segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}

---

##### `subSegmentNum`<sup>Optional</sup> <a name="subSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum"></a>

```typescript
public readonly subSegmentNum: number;
```

- *Type:* number

The sub-segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}

---

##### `subSegmentsExpected`<sup>Optional</sup> <a name="subSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected"></a>

```typescript
public readonly subSegmentsExpected: number;
```

- *Type:* number

The number of sub-segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}

---

### MediatailorProgramAudienceMediaAlternateMediaClipRange <a name="MediatailorProgramAudienceMediaAlternateMediaClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramAudienceMediaAlternateMediaClipRange: mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.endOffsetMillis">endOffsetMillis</a></code> | <code>number</code> | The end offset of the clip range, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.startOffsetMillis">startOffsetMillis</a></code> | <code>number</code> | The start offset of the clip range, in milliseconds. |

---

##### `endOffsetMillis`<sup>Optional</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.endOffsetMillis"></a>

```typescript
public readonly endOffsetMillis: number;
```

- *Type:* number

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

##### `startOffsetMillis`<sup>Optional</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.startOffsetMillis"></a>

```typescript
public readonly startOffsetMillis: number;
```

- *Type:* number

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

### MediatailorProgramClipRange <a name="MediatailorProgramClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramClipRange: mediatailorProgram.MediatailorProgramClipRange = { ... }
```


### MediatailorProgramConfig <a name="MediatailorProgramConfig" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramConfig: mediatailorProgram.MediatailorProgramConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.channelName">channelName</a></code> | <code>string</code> | The name of the channel for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.programName">programName</a></code> | <code>string</code> | The name of the Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The name of the source location. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.adBreaks">adBreaks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>[]</code> | The ad break configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.audienceMedia">audienceMedia</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>[]</code> | The list of AudienceMedia defined in program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.liveSourceName">liveSourceName</a></code> | <code>string</code> | The name of the LiveSource for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | The schedule configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | The name that's used to refer to a VOD source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The name of the channel for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#channel_name MediatailorProgram#channel_name}

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

The name of the Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#program_name MediatailorProgram#program_name}

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The name of the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `adBreaks`<sup>Optional</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.adBreaks"></a>

```typescript
public readonly adBreaks: IResolvable | MediatailorProgramAdBreaks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>[]

The ad break configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `audienceMedia`<sup>Optional</sup> <a name="audienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.audienceMedia"></a>

```typescript
public readonly audienceMedia: IResolvable | MediatailorProgramAudienceMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>[]

The list of AudienceMedia defined in program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience_media MediatailorProgram#audience_media}

---

##### `liveSourceName`<sup>Optional</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.liveSourceName"></a>

```typescript
public readonly liveSourceName: string;
```

- *Type:* string

The name of the LiveSource for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `scheduleConfiguration`<sup>Optional</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.scheduleConfiguration"></a>

```typescript
public readonly scheduleConfiguration: MediatailorProgramScheduleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

The schedule configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#schedule_configuration MediatailorProgram#schedule_configuration}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

The name that's used to refer to a VOD source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramScheduleConfiguration <a name="MediatailorProgramScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramScheduleConfiguration: mediatailorProgram.MediatailorProgramScheduleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | Clip range configuration for the VOD source associated with the program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.transition">transition</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | Program transition configuration. |

---

##### `clipRange`<sup>Optional</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.clipRange"></a>

```typescript
public readonly clipRange: MediatailorProgramScheduleConfigurationClipRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.transition"></a>

```typescript
public readonly transition: MediatailorProgramScheduleConfigurationTransition;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

Program transition configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#transition MediatailorProgram#transition}

---

### MediatailorProgramScheduleConfigurationClipRange <a name="MediatailorProgramScheduleConfigurationClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramScheduleConfigurationClipRange: mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.endOffsetMillis">endOffsetMillis</a></code> | <code>number</code> | The end offset of the clip range, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.startOffsetMillis">startOffsetMillis</a></code> | <code>number</code> | The start offset of the clip range, in milliseconds. |

---

##### `endOffsetMillis`<sup>Optional</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.endOffsetMillis"></a>

```typescript
public readonly endOffsetMillis: number;
```

- *Type:* number

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

##### `startOffsetMillis`<sup>Optional</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.startOffsetMillis"></a>

```typescript
public readonly startOffsetMillis: number;
```

- *Type:* number

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

### MediatailorProgramScheduleConfigurationTransition <a name="MediatailorProgramScheduleConfigurationTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

const mediatailorProgramScheduleConfigurationTransition: mediatailorProgram.MediatailorProgramScheduleConfigurationTransition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.durationMillis">durationMillis</a></code> | <code>number</code> | The duration of the live program in seconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativePosition">relativePosition</a></code> | <code>string</code> | The position where this program will be inserted relative to the RelativePosition. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativeProgram">relativeProgram</a></code> | <code>string</code> | The name of the program that this program will be inserted next to. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.scheduledStartTimeMillis">scheduledStartTimeMillis</a></code> | <code>number</code> | The date and time that the program is scheduled to start, in epoch milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.type">type</a></code> | <code>string</code> | Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE. |

---

##### `durationMillis`<sup>Optional</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.durationMillis"></a>

```typescript
public readonly durationMillis: number;
```

- *Type:* number

The duration of the live program in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

##### `relativePosition`<sup>Optional</sup> <a name="relativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativePosition"></a>

```typescript
public readonly relativePosition: string;
```

- *Type:* string

The position where this program will be inserted relative to the RelativePosition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_position MediatailorProgram#relative_position}

---

##### `relativeProgram`<sup>Optional</sup> <a name="relativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativeProgram"></a>

```typescript
public readonly relativeProgram: string;
```

- *Type:* string

The name of the program that this program will be inserted next to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_program MediatailorProgram#relative_program}

---

##### `scheduledStartTimeMillis`<sup>Optional</sup> <a name="scheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.scheduledStartTimeMillis"></a>

```typescript
public readonly scheduledStartTimeMillis: number;
```

- *Type:* number

The date and time that the program is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#type MediatailorProgram#type}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorProgramAdBreaksAdBreakMetadataList <a name="MediatailorProgramAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get"></a>

```typescript
public get(index: number): MediatailorProgramAdBreaksAdBreakMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaksAdBreakMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>[]

---


### MediatailorProgramAdBreaksAdBreakMetadataOutputReference <a name="MediatailorProgramAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaksAdBreakMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>

---


### MediatailorProgramAdBreaksList <a name="MediatailorProgramAdBreaksList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get"></a>

```typescript
public get(index: number): MediatailorProgramAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>[]

---


### MediatailorProgramAdBreaksOutputReference <a name="MediatailorProgramAdBreaksOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata">putAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate">putSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage">putSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage">putTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetAdBreakMetadata">resetAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetMessageType">resetMessageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetOffsetMillis">resetOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSlate">resetSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSpliceInsertMessage">resetSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetTimeSignalMessage">resetTimeSignalMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdBreakMetadata` <a name="putAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata"></a>

```typescript
public putAdBreakMetadata(value: IResolvable | MediatailorProgramAdBreaksAdBreakMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>[]

---

##### `putSlate` <a name="putSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate"></a>

```typescript
public putSlate(value: MediatailorProgramAdBreaksSlate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---

##### `putSpliceInsertMessage` <a name="putSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage"></a>

```typescript
public putSpliceInsertMessage(value: MediatailorProgramAdBreaksSpliceInsertMessage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---

##### `putTimeSignalMessage` <a name="putTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage"></a>

```typescript
public putTimeSignalMessage(value: MediatailorProgramAdBreaksTimeSignalMessage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---

##### `resetAdBreakMetadata` <a name="resetAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetAdBreakMetadata"></a>

```typescript
public resetAdBreakMetadata(): void
```

##### `resetMessageType` <a name="resetMessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetMessageType"></a>

```typescript
public resetMessageType(): void
```

##### `resetOffsetMillis` <a name="resetOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetOffsetMillis"></a>

```typescript
public resetOffsetMillis(): void
```

##### `resetSlate` <a name="resetSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSlate"></a>

```typescript
public resetSlate(): void
```

##### `resetSpliceInsertMessage` <a name="resetSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSpliceInsertMessage"></a>

```typescript
public resetSpliceInsertMessage(): void
```

##### `resetTimeSignalMessage` <a name="resetTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetTimeSignalMessage"></a>

```typescript
public resetTimeSignalMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadata">adBreakMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList">MediatailorProgramAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference">MediatailorProgramAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage">spliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessage">timeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadataInput">adBreakMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageTypeInput">messageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillisInput">offsetMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slateInput">slateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessageInput">spliceInsertMessageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessageInput">timeSignalMessageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillis">offsetMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adBreakMetadata`<sup>Required</sup> <a name="adBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadata"></a>

```typescript
public readonly adBreakMetadata: MediatailorProgramAdBreaksAdBreakMetadataList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList">MediatailorProgramAdBreaksAdBreakMetadataList</a>

---

##### `slate`<sup>Required</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slate"></a>

```typescript
public readonly slate: MediatailorProgramAdBreaksSlateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference">MediatailorProgramAdBreaksSlateOutputReference</a>

---

##### `spliceInsertMessage`<sup>Required</sup> <a name="spliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage"></a>

```typescript
public readonly spliceInsertMessage: MediatailorProgramAdBreaksSpliceInsertMessageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `timeSignalMessage`<sup>Required</sup> <a name="timeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessage"></a>

```typescript
public readonly timeSignalMessage: MediatailorProgramAdBreaksTimeSignalMessageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAdBreaksTimeSignalMessageOutputReference</a>

---

##### `adBreakMetadataInput`<sup>Optional</sup> <a name="adBreakMetadataInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadataInput"></a>

```typescript
public readonly adBreakMetadataInput: IResolvable | MediatailorProgramAdBreaksAdBreakMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>[]

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageTypeInput"></a>

```typescript
public readonly messageTypeInput: string;
```

- *Type:* string

---

##### `offsetMillisInput`<sup>Optional</sup> <a name="offsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillisInput"></a>

```typescript
public readonly offsetMillisInput: number;
```

- *Type:* number

---

##### `slateInput`<sup>Optional</sup> <a name="slateInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slateInput"></a>

```typescript
public readonly slateInput: IResolvable | MediatailorProgramAdBreaksSlate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---

##### `spliceInsertMessageInput`<sup>Optional</sup> <a name="spliceInsertMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessageInput"></a>

```typescript
public readonly spliceInsertMessageInput: IResolvable | MediatailorProgramAdBreaksSpliceInsertMessage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---

##### `timeSignalMessageInput`<sup>Optional</sup> <a name="timeSignalMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessageInput"></a>

```typescript
public readonly timeSignalMessageInput: IResolvable | MediatailorProgramAdBreaksTimeSignalMessage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

##### `offsetMillis`<sup>Required</sup> <a name="offsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillis"></a>

```typescript
public readonly offsetMillis: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>

---


### MediatailorProgramAdBreaksSlateOutputReference <a name="MediatailorProgramAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetSourceLocationName">resetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceLocationName` <a name="resetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetSourceLocationName"></a>

```typescript
public resetSourceLocationName(): void
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetVodSourceName"></a>

```typescript
public resetVodSourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationNameInput"></a>

```typescript
public readonly sourceLocationNameInput: string;
```

- *Type:* string

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceNameInput"></a>

```typescript
public readonly vodSourceNameInput: string;
```

- *Type:* string

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaksSlate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---


### MediatailorProgramAdBreaksSpliceInsertMessageOutputReference <a name="MediatailorProgramAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailNum">resetAvailNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected">resetAvailsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId">resetSpliceEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId">resetUniqueProgramId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailNum` <a name="resetAvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailNum"></a>

```typescript
public resetAvailNum(): void
```

##### `resetAvailsExpected` <a name="resetAvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected"></a>

```typescript
public resetAvailsExpected(): void
```

##### `resetSpliceEventId` <a name="resetSpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId"></a>

```typescript
public resetSpliceEventId(): void
```

##### `resetUniqueProgramId` <a name="resetUniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId"></a>

```typescript
public resetUniqueProgramId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNumInput">availNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput">availsExpectedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput">spliceEventIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput">uniqueProgramIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum">availNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">availsExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">spliceEventId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">uniqueProgramId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availNumInput`<sup>Optional</sup> <a name="availNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNumInput"></a>

```typescript
public readonly availNumInput: number;
```

- *Type:* number

---

##### `availsExpectedInput`<sup>Optional</sup> <a name="availsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput"></a>

```typescript
public readonly availsExpectedInput: number;
```

- *Type:* number

---

##### `spliceEventIdInput`<sup>Optional</sup> <a name="spliceEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput"></a>

```typescript
public readonly spliceEventIdInput: number;
```

- *Type:* number

---

##### `uniqueProgramIdInput`<sup>Optional</sup> <a name="uniqueProgramIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput"></a>

```typescript
public readonly uniqueProgramIdInput: number;
```

- *Type:* number

---

##### `availNum`<sup>Required</sup> <a name="availNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```typescript
public readonly availNum: number;
```

- *Type:* number

---

##### `availsExpected`<sup>Required</sup> <a name="availsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```typescript
public readonly availsExpected: number;
```

- *Type:* number

---

##### `spliceEventId`<sup>Required</sup> <a name="spliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```typescript
public readonly spliceEventId: number;
```

- *Type:* number

---

##### `uniqueProgramId`<sup>Required</sup> <a name="uniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```typescript
public readonly uniqueProgramId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaksSpliceInsertMessage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---


### MediatailorProgramAdBreaksTimeSignalMessageOutputReference <a name="MediatailorProgramAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors">putSegmentationDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors">resetSegmentationDescriptors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSegmentationDescriptors` <a name="putSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors"></a>

```typescript
public putSegmentationDescriptors(value: IResolvable | MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]

---

##### `resetSegmentationDescriptors` <a name="resetSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors"></a>

```typescript
public resetSegmentationDescriptors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">segmentationDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput">segmentationDescriptorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentationDescriptors`<sup>Required</sup> <a name="segmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```typescript
public readonly segmentationDescriptors: MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `segmentationDescriptorsInput`<sup>Optional</sup> <a name="segmentationDescriptorsInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput"></a>

```typescript
public readonly segmentationDescriptorsInput: IResolvable | MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaksTimeSignalMessage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---


### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```typescript
public get(index: number): MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]

---


### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId">resetSegmentationEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId">resetSegmentationTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid">resetSegmentationUpid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType">resetSegmentationUpidType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum">resetSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected">resetSegmentsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum">resetSubSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected">resetSubSegmentsExpected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSegmentationEventId` <a name="resetSegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId"></a>

```typescript
public resetSegmentationEventId(): void
```

##### `resetSegmentationTypeId` <a name="resetSegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId"></a>

```typescript
public resetSegmentationTypeId(): void
```

##### `resetSegmentationUpid` <a name="resetSegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid"></a>

```typescript
public resetSegmentationUpid(): void
```

##### `resetSegmentationUpidType` <a name="resetSegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType"></a>

```typescript
public resetSegmentationUpidType(): void
```

##### `resetSegmentNum` <a name="resetSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum"></a>

```typescript
public resetSegmentNum(): void
```

##### `resetSegmentsExpected` <a name="resetSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected"></a>

```typescript
public resetSegmentsExpected(): void
```

##### `resetSubSegmentNum` <a name="resetSubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum"></a>

```typescript
public resetSubSegmentNum(): void
```

##### `resetSubSegmentsExpected` <a name="resetSubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected"></a>

```typescript
public resetSubSegmentsExpected(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput">segmentationEventIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput">segmentationTypeIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput">segmentationUpidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput">segmentationUpidTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput">segmentNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput">segmentsExpectedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput">subSegmentNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput">subSegmentsExpectedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">segmentationEventId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">segmentationTypeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">segmentationUpid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">segmentationUpidType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">segmentNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">segmentsExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">subSegmentNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">subSegmentsExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentationEventIdInput`<sup>Optional</sup> <a name="segmentationEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput"></a>

```typescript
public readonly segmentationEventIdInput: number;
```

- *Type:* number

---

##### `segmentationTypeIdInput`<sup>Optional</sup> <a name="segmentationTypeIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput"></a>

```typescript
public readonly segmentationTypeIdInput: number;
```

- *Type:* number

---

##### `segmentationUpidInput`<sup>Optional</sup> <a name="segmentationUpidInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput"></a>

```typescript
public readonly segmentationUpidInput: string;
```

- *Type:* string

---

##### `segmentationUpidTypeInput`<sup>Optional</sup> <a name="segmentationUpidTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput"></a>

```typescript
public readonly segmentationUpidTypeInput: number;
```

- *Type:* number

---

##### `segmentNumInput`<sup>Optional</sup> <a name="segmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput"></a>

```typescript
public readonly segmentNumInput: number;
```

- *Type:* number

---

##### `segmentsExpectedInput`<sup>Optional</sup> <a name="segmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput"></a>

```typescript
public readonly segmentsExpectedInput: number;
```

- *Type:* number

---

##### `subSegmentNumInput`<sup>Optional</sup> <a name="subSegmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput"></a>

```typescript
public readonly subSegmentNumInput: number;
```

- *Type:* number

---

##### `subSegmentsExpectedInput`<sup>Optional</sup> <a name="subSegmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput"></a>

```typescript
public readonly subSegmentsExpectedInput: number;
```

- *Type:* number

---

##### `segmentationEventId`<sup>Required</sup> <a name="segmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```typescript
public readonly segmentationEventId: number;
```

- *Type:* number

---

##### `segmentationTypeId`<sup>Required</sup> <a name="segmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```typescript
public readonly segmentationTypeId: number;
```

- *Type:* number

---

##### `segmentationUpid`<sup>Required</sup> <a name="segmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```typescript
public readonly segmentationUpid: string;
```

- *Type:* string

---

##### `segmentationUpidType`<sup>Required</sup> <a name="segmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```typescript
public readonly segmentationUpidType: number;
```

- *Type:* number

---

##### `segmentNum`<sup>Required</sup> <a name="segmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```typescript
public readonly segmentNum: number;
```

- *Type:* number

---

##### `segmentsExpected`<sup>Required</sup> <a name="segmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```typescript
public readonly segmentsExpected: number;
```

- *Type:* number

---

##### `subSegmentNum`<sup>Required</sup> <a name="subSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```typescript
public readonly subSegmentNum: number;
```

- *Type:* number

---

##### `subSegmentsExpected`<sup>Required</sup> <a name="subSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```typescript
public readonly subSegmentsExpected: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get"></a>

```typescript
public get(index: number): MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>[]

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get"></a>

```typescript
public get(index: number): MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>[]

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata">putAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate">putSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage">putSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage">putTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetAdBreakMetadata">resetAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetMessageType">resetMessageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetOffsetMillis">resetOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSlate">resetSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSpliceInsertMessage">resetSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetTimeSignalMessage">resetTimeSignalMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdBreakMetadata` <a name="putAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata"></a>

```typescript
public putAdBreakMetadata(value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>[]

---

##### `putSlate` <a name="putSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate"></a>

```typescript
public putSlate(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---

##### `putSpliceInsertMessage` <a name="putSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage"></a>

```typescript
public putSpliceInsertMessage(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---

##### `putTimeSignalMessage` <a name="putTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage"></a>

```typescript
public putTimeSignalMessage(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---

##### `resetAdBreakMetadata` <a name="resetAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetAdBreakMetadata"></a>

```typescript
public resetAdBreakMetadata(): void
```

##### `resetMessageType` <a name="resetMessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetMessageType"></a>

```typescript
public resetMessageType(): void
```

##### `resetOffsetMillis` <a name="resetOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetOffsetMillis"></a>

```typescript
public resetOffsetMillis(): void
```

##### `resetSlate` <a name="resetSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSlate"></a>

```typescript
public resetSlate(): void
```

##### `resetSpliceInsertMessage` <a name="resetSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSpliceInsertMessage"></a>

```typescript
public resetSpliceInsertMessage(): void
```

##### `resetTimeSignalMessage` <a name="resetTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetTimeSignalMessage"></a>

```typescript
public resetTimeSignalMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata">adBreakMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage">spliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage">timeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadataInput">adBreakMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageTypeInput">messageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillisInput">offsetMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slateInput">slateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessageInput">spliceInsertMessageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessageInput">timeSignalMessageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis">offsetMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adBreakMetadata`<sup>Required</sup> <a name="adBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata"></a>

```typescript
public readonly adBreakMetadata: MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a>

---

##### `slate`<sup>Required</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate"></a>

```typescript
public readonly slate: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a>

---

##### `spliceInsertMessage`<sup>Required</sup> <a name="spliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage"></a>

```typescript
public readonly spliceInsertMessage: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `timeSignalMessage`<sup>Required</sup> <a name="timeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage"></a>

```typescript
public readonly timeSignalMessage: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a>

---

##### `adBreakMetadataInput`<sup>Optional</sup> <a name="adBreakMetadataInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadataInput"></a>

```typescript
public readonly adBreakMetadataInput: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>[]

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageTypeInput"></a>

```typescript
public readonly messageTypeInput: string;
```

- *Type:* string

---

##### `offsetMillisInput`<sup>Optional</sup> <a name="offsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillisInput"></a>

```typescript
public readonly offsetMillisInput: number;
```

- *Type:* number

---

##### `slateInput`<sup>Optional</sup> <a name="slateInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slateInput"></a>

```typescript
public readonly slateInput: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---

##### `spliceInsertMessageInput`<sup>Optional</sup> <a name="spliceInsertMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessageInput"></a>

```typescript
public readonly spliceInsertMessageInput: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---

##### `timeSignalMessageInput`<sup>Optional</sup> <a name="timeSignalMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessageInput"></a>

```typescript
public readonly timeSignalMessageInput: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

##### `offsetMillis`<sup>Required</sup> <a name="offsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis"></a>

```typescript
public readonly offsetMillis: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetSourceLocationName">resetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceLocationName` <a name="resetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetSourceLocationName"></a>

```typescript
public resetSourceLocationName(): void
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetVodSourceName"></a>

```typescript
public resetVodSourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationNameInput"></a>

```typescript
public readonly sourceLocationNameInput: string;
```

- *Type:* string

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceNameInput"></a>

```typescript
public readonly vodSourceNameInput: string;
```

- *Type:* string

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailNum">resetAvailNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected">resetAvailsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId">resetSpliceEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId">resetUniqueProgramId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailNum` <a name="resetAvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailNum"></a>

```typescript
public resetAvailNum(): void
```

##### `resetAvailsExpected` <a name="resetAvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected"></a>

```typescript
public resetAvailsExpected(): void
```

##### `resetSpliceEventId` <a name="resetSpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId"></a>

```typescript
public resetSpliceEventId(): void
```

##### `resetUniqueProgramId` <a name="resetUniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId"></a>

```typescript
public resetUniqueProgramId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNumInput">availNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput">availsExpectedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput">spliceEventIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput">uniqueProgramIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum">availNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">availsExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">spliceEventId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">uniqueProgramId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availNumInput`<sup>Optional</sup> <a name="availNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNumInput"></a>

```typescript
public readonly availNumInput: number;
```

- *Type:* number

---

##### `availsExpectedInput`<sup>Optional</sup> <a name="availsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput"></a>

```typescript
public readonly availsExpectedInput: number;
```

- *Type:* number

---

##### `spliceEventIdInput`<sup>Optional</sup> <a name="spliceEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput"></a>

```typescript
public readonly spliceEventIdInput: number;
```

- *Type:* number

---

##### `uniqueProgramIdInput`<sup>Optional</sup> <a name="uniqueProgramIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput"></a>

```typescript
public readonly uniqueProgramIdInput: number;
```

- *Type:* number

---

##### `availNum`<sup>Required</sup> <a name="availNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```typescript
public readonly availNum: number;
```

- *Type:* number

---

##### `availsExpected`<sup>Required</sup> <a name="availsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```typescript
public readonly availsExpected: number;
```

- *Type:* number

---

##### `spliceEventId`<sup>Required</sup> <a name="spliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```typescript
public readonly spliceEventId: number;
```

- *Type:* number

---

##### `uniqueProgramId`<sup>Required</sup> <a name="uniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```typescript
public readonly uniqueProgramId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors">putSegmentationDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors">resetSegmentationDescriptors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSegmentationDescriptors` <a name="putSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors"></a>

```typescript
public putSegmentationDescriptors(value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]

---

##### `resetSegmentationDescriptors` <a name="resetSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors"></a>

```typescript
public resetSegmentationDescriptors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">segmentationDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput">segmentationDescriptorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentationDescriptors`<sup>Required</sup> <a name="segmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```typescript
public readonly segmentationDescriptors: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `segmentationDescriptorsInput`<sup>Optional</sup> <a name="segmentationDescriptorsInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput"></a>

```typescript
public readonly segmentationDescriptorsInput: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```typescript
public get(index: number): MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>[]

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId">resetSegmentationEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId">resetSegmentationTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid">resetSegmentationUpid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType">resetSegmentationUpidType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum">resetSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected">resetSegmentsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum">resetSubSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected">resetSubSegmentsExpected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSegmentationEventId` <a name="resetSegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId"></a>

```typescript
public resetSegmentationEventId(): void
```

##### `resetSegmentationTypeId` <a name="resetSegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId"></a>

```typescript
public resetSegmentationTypeId(): void
```

##### `resetSegmentationUpid` <a name="resetSegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid"></a>

```typescript
public resetSegmentationUpid(): void
```

##### `resetSegmentationUpidType` <a name="resetSegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType"></a>

```typescript
public resetSegmentationUpidType(): void
```

##### `resetSegmentNum` <a name="resetSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum"></a>

```typescript
public resetSegmentNum(): void
```

##### `resetSegmentsExpected` <a name="resetSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected"></a>

```typescript
public resetSegmentsExpected(): void
```

##### `resetSubSegmentNum` <a name="resetSubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum"></a>

```typescript
public resetSubSegmentNum(): void
```

##### `resetSubSegmentsExpected` <a name="resetSubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected"></a>

```typescript
public resetSubSegmentsExpected(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput">segmentationEventIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput">segmentationTypeIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput">segmentationUpidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput">segmentationUpidTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput">segmentNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput">segmentsExpectedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput">subSegmentNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput">subSegmentsExpectedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">segmentationEventId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">segmentationTypeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">segmentationUpid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">segmentationUpidType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">segmentNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">segmentsExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">subSegmentNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">subSegmentsExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentationEventIdInput`<sup>Optional</sup> <a name="segmentationEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput"></a>

```typescript
public readonly segmentationEventIdInput: number;
```

- *Type:* number

---

##### `segmentationTypeIdInput`<sup>Optional</sup> <a name="segmentationTypeIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput"></a>

```typescript
public readonly segmentationTypeIdInput: number;
```

- *Type:* number

---

##### `segmentationUpidInput`<sup>Optional</sup> <a name="segmentationUpidInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput"></a>

```typescript
public readonly segmentationUpidInput: string;
```

- *Type:* string

---

##### `segmentationUpidTypeInput`<sup>Optional</sup> <a name="segmentationUpidTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput"></a>

```typescript
public readonly segmentationUpidTypeInput: number;
```

- *Type:* number

---

##### `segmentNumInput`<sup>Optional</sup> <a name="segmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput"></a>

```typescript
public readonly segmentNumInput: number;
```

- *Type:* number

---

##### `segmentsExpectedInput`<sup>Optional</sup> <a name="segmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput"></a>

```typescript
public readonly segmentsExpectedInput: number;
```

- *Type:* number

---

##### `subSegmentNumInput`<sup>Optional</sup> <a name="subSegmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput"></a>

```typescript
public readonly subSegmentNumInput: number;
```

- *Type:* number

---

##### `subSegmentsExpectedInput`<sup>Optional</sup> <a name="subSegmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput"></a>

```typescript
public readonly subSegmentsExpectedInput: number;
```

- *Type:* number

---

##### `segmentationEventId`<sup>Required</sup> <a name="segmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```typescript
public readonly segmentationEventId: number;
```

- *Type:* number

---

##### `segmentationTypeId`<sup>Required</sup> <a name="segmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```typescript
public readonly segmentationTypeId: number;
```

- *Type:* number

---

##### `segmentationUpid`<sup>Required</sup> <a name="segmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```typescript
public readonly segmentationUpid: string;
```

- *Type:* string

---

##### `segmentationUpidType`<sup>Required</sup> <a name="segmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```typescript
public readonly segmentationUpidType: number;
```

- *Type:* number

---

##### `segmentNum`<sup>Required</sup> <a name="segmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```typescript
public readonly segmentNum: number;
```

- *Type:* number

---

##### `segmentsExpected`<sup>Required</sup> <a name="segmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```typescript
public readonly segmentsExpected: number;
```

- *Type:* number

---

##### `subSegmentNum`<sup>Required</sup> <a name="subSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```typescript
public readonly subSegmentNum: number;
```

- *Type:* number

---

##### `subSegmentsExpected`<sup>Required</sup> <a name="subSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```typescript
public readonly subSegmentsExpected: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetEndOffsetMillis">resetEndOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetStartOffsetMillis">resetStartOffsetMillis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndOffsetMillis` <a name="resetEndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetEndOffsetMillis"></a>

```typescript
public resetEndOffsetMillis(): void
```

##### `resetStartOffsetMillis` <a name="resetStartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetStartOffsetMillis"></a>

```typescript
public resetStartOffsetMillis(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillisInput">endOffsetMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillisInput">startOffsetMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis">endOffsetMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis">startOffsetMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endOffsetMillisInput`<sup>Optional</sup> <a name="endOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillisInput"></a>

```typescript
public readonly endOffsetMillisInput: number;
```

- *Type:* number

---

##### `startOffsetMillisInput`<sup>Optional</sup> <a name="startOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillisInput"></a>

```typescript
public readonly startOffsetMillisInput: number;
```

- *Type:* number

---

##### `endOffsetMillis`<sup>Required</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis"></a>

```typescript
public readonly endOffsetMillis: number;
```

- *Type:* number

---

##### `startOffsetMillis`<sup>Required</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis"></a>

```typescript
public readonly startOffsetMillis: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMediaClipRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---


### MediatailorProgramAudienceMediaAlternateMediaList <a name="MediatailorProgramAudienceMediaAlternateMediaList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get"></a>

```typescript
public get(index: number): MediatailorProgramAudienceMediaAlternateMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>[]

---


### MediatailorProgramAudienceMediaAlternateMediaOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks">putAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange">putClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetAdBreaks">resetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetClipRange">resetClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetDurationMillis">resetDurationMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetLiveSourceName">resetLiveSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetScheduledStartTimeMillis">resetScheduledStartTimeMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetSourceLocationName">resetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdBreaks` <a name="putAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks"></a>

```typescript
public putAdBreaks(value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>[]

---

##### `putClipRange` <a name="putClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange"></a>

```typescript
public putClipRange(value: MediatailorProgramAudienceMediaAlternateMediaClipRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---

##### `resetAdBreaks` <a name="resetAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetAdBreaks"></a>

```typescript
public resetAdBreaks(): void
```

##### `resetClipRange` <a name="resetClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetClipRange"></a>

```typescript
public resetClipRange(): void
```

##### `resetDurationMillis` <a name="resetDurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetDurationMillis"></a>

```typescript
public resetDurationMillis(): void
```

##### `resetLiveSourceName` <a name="resetLiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetLiveSourceName"></a>

```typescript
public resetLiveSourceName(): void
```

##### `resetScheduledStartTimeMillis` <a name="resetScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetScheduledStartTimeMillis"></a>

```typescript
public resetScheduledStartTimeMillis(): void
```

##### `resetSourceLocationName` <a name="resetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetSourceLocationName"></a>

```typescript
public resetSourceLocationName(): void
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetVodSourceName"></a>

```typescript
public resetVodSourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks">adBreaks</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaksInput">adBreaksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRangeInput">clipRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillisInput">durationMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceNameInput">liveSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillisInput">scheduledStartTimeMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis">durationMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName">liveSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis">scheduledStartTimeMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adBreaks`<sup>Required</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks"></a>

```typescript
public readonly adBreaks: MediatailorProgramAudienceMediaAlternateMediaAdBreaksList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a>

---

##### `clipRange`<sup>Required</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange"></a>

```typescript
public readonly clipRange: MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a>

---

##### `adBreaksInput`<sup>Optional</sup> <a name="adBreaksInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaksInput"></a>

```typescript
public readonly adBreaksInput: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>[]

---

##### `clipRangeInput`<sup>Optional</sup> <a name="clipRangeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRangeInput"></a>

```typescript
public readonly clipRangeInput: IResolvable | MediatailorProgramAudienceMediaAlternateMediaClipRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---

##### `durationMillisInput`<sup>Optional</sup> <a name="durationMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillisInput"></a>

```typescript
public readonly durationMillisInput: number;
```

- *Type:* number

---

##### `liveSourceNameInput`<sup>Optional</sup> <a name="liveSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceNameInput"></a>

```typescript
public readonly liveSourceNameInput: string;
```

- *Type:* string

---

##### `scheduledStartTimeMillisInput`<sup>Optional</sup> <a name="scheduledStartTimeMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillisInput"></a>

```typescript
public readonly scheduledStartTimeMillisInput: number;
```

- *Type:* number

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationNameInput"></a>

```typescript
public readonly sourceLocationNameInput: string;
```

- *Type:* string

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceNameInput"></a>

```typescript
public readonly vodSourceNameInput: string;
```

- *Type:* string

---

##### `durationMillis`<sup>Required</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis"></a>

```typescript
public readonly durationMillis: number;
```

- *Type:* number

---

##### `liveSourceName`<sup>Required</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName"></a>

```typescript
public readonly liveSourceName: string;
```

- *Type:* string

---

##### `scheduledStartTimeMillis`<sup>Required</sup> <a name="scheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis"></a>

```typescript
public readonly scheduledStartTimeMillis: number;
```

- *Type:* number

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMediaAlternateMedia;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>

---


### MediatailorProgramAudienceMediaList <a name="MediatailorProgramAudienceMediaList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get"></a>

```typescript
public get(index: number): MediatailorProgramAudienceMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>[]

---


### MediatailorProgramAudienceMediaOutputReference <a name="MediatailorProgramAudienceMediaOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramAudienceMediaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia">putAlternateMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAlternateMedia">resetAlternateMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlternateMedia` <a name="putAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia"></a>

```typescript
public putAlternateMedia(value: IResolvable | MediatailorProgramAudienceMediaAlternateMedia[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>[]

---

##### `resetAlternateMedia` <a name="resetAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAlternateMedia"></a>

```typescript
public resetAlternateMedia(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMedia">alternateMedia</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList">MediatailorProgramAudienceMediaAlternateMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMediaInput">alternateMediaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alternateMedia`<sup>Required</sup> <a name="alternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMedia"></a>

```typescript
public readonly alternateMedia: MediatailorProgramAudienceMediaAlternateMediaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList">MediatailorProgramAudienceMediaAlternateMediaList</a>

---

##### `alternateMediaInput`<sup>Optional</sup> <a name="alternateMediaInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMediaInput"></a>

```typescript
public readonly alternateMediaInput: IResolvable | MediatailorProgramAudienceMediaAlternateMedia[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>[]

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramAudienceMedia;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>

---


### MediatailorProgramClipRangeOutputReference <a name="MediatailorProgramClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramClipRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.endOffsetMillis">endOffsetMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.startOffsetMillis">startOffsetMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange">MediatailorProgramClipRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endOffsetMillis`<sup>Required</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.endOffsetMillis"></a>

```typescript
public readonly endOffsetMillis: number;
```

- *Type:* number

---

##### `startOffsetMillis`<sup>Required</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.startOffsetMillis"></a>

```typescript
public readonly startOffsetMillis: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediatailorProgramClipRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange">MediatailorProgramClipRange</a>

---


### MediatailorProgramScheduleConfigurationClipRangeOutputReference <a name="MediatailorProgramScheduleConfigurationClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetEndOffsetMillis">resetEndOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetStartOffsetMillis">resetStartOffsetMillis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndOffsetMillis` <a name="resetEndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetEndOffsetMillis"></a>

```typescript
public resetEndOffsetMillis(): void
```

##### `resetStartOffsetMillis` <a name="resetStartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetStartOffsetMillis"></a>

```typescript
public resetStartOffsetMillis(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillisInput">endOffsetMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillisInput">startOffsetMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis">endOffsetMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis">startOffsetMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endOffsetMillisInput`<sup>Optional</sup> <a name="endOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillisInput"></a>

```typescript
public readonly endOffsetMillisInput: number;
```

- *Type:* number

---

##### `startOffsetMillisInput`<sup>Optional</sup> <a name="startOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillisInput"></a>

```typescript
public readonly startOffsetMillisInput: number;
```

- *Type:* number

---

##### `endOffsetMillis`<sup>Required</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis"></a>

```typescript
public readonly endOffsetMillis: number;
```

- *Type:* number

---

##### `startOffsetMillis`<sup>Required</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis"></a>

```typescript
public readonly startOffsetMillis: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramScheduleConfigurationClipRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---


### MediatailorProgramScheduleConfigurationOutputReference <a name="MediatailorProgramScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange">putClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition">putTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetClipRange">resetClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetTransition">resetTransition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClipRange` <a name="putClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange"></a>

```typescript
public putClipRange(value: MediatailorProgramScheduleConfigurationClipRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---

##### `putTransition` <a name="putTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition"></a>

```typescript
public putTransition(value: MediatailorProgramScheduleConfigurationTransition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---

##### `resetClipRange` <a name="resetClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetClipRange"></a>

```typescript
public resetClipRange(): void
```

##### `resetTransition` <a name="resetTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetTransition"></a>

```typescript
public resetTransition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference">MediatailorProgramScheduleConfigurationClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference">MediatailorProgramScheduleConfigurationTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRangeInput">clipRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transitionInput">transitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipRange`<sup>Required</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRange"></a>

```typescript
public readonly clipRange: MediatailorProgramScheduleConfigurationClipRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference">MediatailorProgramScheduleConfigurationClipRangeOutputReference</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transition"></a>

```typescript
public readonly transition: MediatailorProgramScheduleConfigurationTransitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference">MediatailorProgramScheduleConfigurationTransitionOutputReference</a>

---

##### `clipRangeInput`<sup>Optional</sup> <a name="clipRangeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRangeInput"></a>

```typescript
public readonly clipRangeInput: IResolvable | MediatailorProgramScheduleConfigurationClipRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---

##### `transitionInput`<sup>Optional</sup> <a name="transitionInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transitionInput"></a>

```typescript
public readonly transitionInput: IResolvable | MediatailorProgramScheduleConfigurationTransition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramScheduleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---


### MediatailorProgramScheduleConfigurationTransitionOutputReference <a name="MediatailorProgramScheduleConfigurationTransitionOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer"></a>

```typescript
import { mediatailorProgram } from '@cdktn/provider-awscc'

new mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetDurationMillis">resetDurationMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativePosition">resetRelativePosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativeProgram">resetRelativeProgram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetScheduledStartTimeMillis">resetScheduledStartTimeMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationMillis` <a name="resetDurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetDurationMillis"></a>

```typescript
public resetDurationMillis(): void
```

##### `resetRelativePosition` <a name="resetRelativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativePosition"></a>

```typescript
public resetRelativePosition(): void
```

##### `resetRelativeProgram` <a name="resetRelativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativeProgram"></a>

```typescript
public resetRelativeProgram(): void
```

##### `resetScheduledStartTimeMillis` <a name="resetScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetScheduledStartTimeMillis"></a>

```typescript
public resetScheduledStartTimeMillis(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillisInput">durationMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePositionInput">relativePositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgramInput">relativeProgramInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillisInput">scheduledStartTimeMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis">durationMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition">relativePosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram">relativeProgram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis">scheduledStartTimeMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationMillisInput`<sup>Optional</sup> <a name="durationMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillisInput"></a>

```typescript
public readonly durationMillisInput: number;
```

- *Type:* number

---

##### `relativePositionInput`<sup>Optional</sup> <a name="relativePositionInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePositionInput"></a>

```typescript
public readonly relativePositionInput: string;
```

- *Type:* string

---

##### `relativeProgramInput`<sup>Optional</sup> <a name="relativeProgramInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgramInput"></a>

```typescript
public readonly relativeProgramInput: string;
```

- *Type:* string

---

##### `scheduledStartTimeMillisInput`<sup>Optional</sup> <a name="scheduledStartTimeMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillisInput"></a>

```typescript
public readonly scheduledStartTimeMillisInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `durationMillis`<sup>Required</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis"></a>

```typescript
public readonly durationMillis: number;
```

- *Type:* number

---

##### `relativePosition`<sup>Required</sup> <a name="relativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition"></a>

```typescript
public readonly relativePosition: string;
```

- *Type:* string

---

##### `relativeProgram`<sup>Required</sup> <a name="relativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram"></a>

```typescript
public readonly relativeProgram: string;
```

- *Type:* string

---

##### `scheduledStartTimeMillis`<sup>Required</sup> <a name="scheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis"></a>

```typescript
public readonly scheduledStartTimeMillis: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorProgramScheduleConfigurationTransition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---



