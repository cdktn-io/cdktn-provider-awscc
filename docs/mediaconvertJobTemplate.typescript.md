# `mediaconvertJobTemplate` Submodule <a name="`mediaconvertJobTemplate` Submodule" id="@cdktn/provider-awscc.mediaconvertJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertJobTemplate <a name="MediaconvertJobTemplate" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template awscc_mediaconvert_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

new mediaconvertJobTemplate.MediaconvertJobTemplate(scope: Construct, id: string, config: MediaconvertJobTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig">MediaconvertJobTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig">MediaconvertJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings">putAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations">putHopDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings">resetAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations">resetHopDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue">resetQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval">resetStatusUpdateInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccelerationSettings` <a name="putAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings"></a>

```typescript
public putAccelerationSettings(value: MediaconvertJobTemplateAccelerationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---

##### `putHopDestinations` <a name="putHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations"></a>

```typescript
public putHopDestinations(value: IResolvable | MediaconvertJobTemplateHopDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]

---

##### `resetAccelerationSettings` <a name="resetAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings"></a>

```typescript
public resetAccelerationSettings(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHopDestinations` <a name="resetHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations"></a>

```typescript
public resetHopDestinations(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetQueue` <a name="resetQueue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue"></a>

```typescript
public resetQueue(): void
```

##### `resetStatusUpdateInterval` <a name="resetStatusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval"></a>

```typescript
public resetStatusUpdateInterval(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconvertJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconvertJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings">accelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations">hopDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput">accelerationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput">hopDestinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput">queueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput">settingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput">statusUpdateIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue">queue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson">settingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval">statusUpdateInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags">tags</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accelerationSettings`<sup>Required</sup> <a name="accelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings"></a>

```typescript
public readonly accelerationSettings: MediaconvertJobTemplateAccelerationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hopDestinations`<sup>Required</sup> <a name="hopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations"></a>

```typescript
public readonly hopDestinations: MediaconvertJobTemplateHopDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accelerationSettingsInput`<sup>Optional</sup> <a name="accelerationSettingsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput"></a>

```typescript
public readonly accelerationSettingsInput: IResolvable | MediaconvertJobTemplateAccelerationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hopDestinationsInput`<sup>Optional</sup> <a name="hopDestinationsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput"></a>

```typescript
public readonly hopDestinationsInput: IResolvable | MediaconvertJobTemplateHopDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput"></a>

```typescript
public readonly queueInput: string;
```

- *Type:* string

---

##### `settingsJsonInput`<sup>Optional</sup> <a name="settingsJsonInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput"></a>

```typescript
public readonly settingsJsonInput: string;
```

- *Type:* string

---

##### `statusUpdateIntervalInput`<sup>Optional</sup> <a name="statusUpdateIntervalInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput"></a>

```typescript
public readonly statusUpdateIntervalInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

---

##### `settingsJson`<sup>Required</sup> <a name="settingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson"></a>

```typescript
public readonly settingsJson: string;
```

- *Type:* string

---

##### `statusUpdateInterval`<sup>Required</sup> <a name="statusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval"></a>

```typescript
public readonly statusUpdateInterval: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertJobTemplateAccelerationSettings <a name="MediaconvertJobTemplateAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.Initializer"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

const mediaconvertJobTemplateAccelerationSettings: mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode">mode</a></code> | <code>string</code> | Specify the conditions when the service will run your job with accelerated transcoding. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specify the conditions when the service will run your job with accelerated transcoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#mode MediaconvertJobTemplate#mode}

---

### MediaconvertJobTemplateConfig <a name="MediaconvertJobTemplateConfig" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.Initializer"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

const mediaconvertJobTemplateConfig: mediaconvertJobTemplate.MediaconvertJobTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson">settingsJson</a></code> | <code>string</code> | Specify, in JSON format, the transcoding job settings for this job template. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings">accelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | Accelerated transcoding can significantly speed up jobs with long, visually complex content. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category">category</a></code> | <code>string</code> | Optional. A category for the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description">description</a></code> | <code>string</code> | Optional. A description of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations">hopDestinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority">priority</a></code> | <code>number</code> | Specify the relative priority for this job. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue">queue</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval">statusUpdateInterval</a></code> | <code>string</code> | Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags">tags</a></code> | <code>string</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `settingsJson`<sup>Required</sup> <a name="settingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson"></a>

```typescript
public readonly settingsJson: string;
```

- *Type:* string

Specify, in JSON format, the transcoding job settings for this job template.

This specification must conform to the AWS Elemental MediaConvert job validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#settings_json MediaconvertJobTemplate#settings_json}

---

##### `accelerationSettings`<sup>Optional</sup> <a name="accelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings"></a>

```typescript
public readonly accelerationSettings: MediaconvertJobTemplateAccelerationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

Accelerated transcoding can significantly speed up jobs with long, visually complex content.

Outputs that use this feature incur pro-tier pricing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#acceleration_settings MediaconvertJobTemplate#acceleration_settings}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Optional. A category for the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#category MediaconvertJobTemplate#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. A description of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#description MediaconvertJobTemplate#description}

---

##### `hopDestinations`<sup>Optional</sup> <a name="hopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations"></a>

```typescript
public readonly hopDestinations: IResolvable | MediaconvertJobTemplateHopDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]

Optional.

Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#hop_destinations MediaconvertJobTemplate#hop_destinations}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#name MediaconvertJobTemplate#name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Specify the relative priority for this job.

In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

Optional.

The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `statusUpdateInterval`<sup>Optional</sup> <a name="statusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval"></a>

```typescript
public readonly statusUpdateInterval: string;
```

- *Type:* string

Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#status_update_interval MediaconvertJobTemplate#status_update_interval}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#tags MediaconvertJobTemplate#tags}

---

### MediaconvertJobTemplateHopDestinations <a name="MediaconvertJobTemplateHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.Initializer"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

const mediaconvertJobTemplateHopDestinations: mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority">priority</a></code> | <code>number</code> | Optional. A different relative priority for the job in the destination queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue">queue</a></code> | <code>string</code> | Optional. The destination queue for queue hopping. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes">waitMinutes</a></code> | <code>number</code> | Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. |

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Optional. A different relative priority for the job in the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

Optional. The destination queue for queue hopping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `waitMinutes`<sup>Optional</sup> <a name="waitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes"></a>

```typescript
public readonly waitMinutes: number;
```

- *Type:* number

Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#wait_minutes MediaconvertJobTemplate#wait_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconvertJobTemplateAccelerationSettingsOutputReference <a name="MediaconvertJobTemplateAccelerationSettingsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

new mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconvertJobTemplateAccelerationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---


### MediaconvertJobTemplateHopDestinationsList <a name="MediaconvertJobTemplateHopDestinationsList" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

new mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get"></a>

```typescript
public get(index: number): MediaconvertJobTemplateHopDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconvertJobTemplateHopDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]

---


### MediaconvertJobTemplateHopDestinationsOutputReference <a name="MediaconvertJobTemplateHopDestinationsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer"></a>

```typescript
import { mediaconvertJobTemplate } from '@cdktn/provider-awscc'

new mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue">resetQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes">resetWaitMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetQueue` <a name="resetQueue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue"></a>

```typescript
public resetQueue(): void
```

##### `resetWaitMinutes` <a name="resetWaitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes"></a>

```typescript
public resetWaitMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput">queueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput">waitMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue">queue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes">waitMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput"></a>

```typescript
public readonly queueInput: string;
```

- *Type:* string

---

##### `waitMinutesInput`<sup>Optional</sup> <a name="waitMinutesInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput"></a>

```typescript
public readonly waitMinutesInput: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

---

##### `waitMinutes`<sup>Required</sup> <a name="waitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes"></a>

```typescript
public readonly waitMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconvertJobTemplateHopDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>

---



