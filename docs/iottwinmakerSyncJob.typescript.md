# `iottwinmakerSyncJob` Submodule <a name="`iottwinmakerSyncJob` Submodule" id="@cdktn/provider-awscc.iottwinmakerSyncJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IottwinmakerSyncJob <a name="IottwinmakerSyncJob" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iottwinmaker_sync_job awscc_iottwinmaker_sync_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer"></a>

```typescript
import { iottwinmakerSyncJob } from '@cdktn/provider-awscc'

new iottwinmakerSyncJob.IottwinmakerSyncJob(scope: Construct, id: string, config: IottwinmakerSyncJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig">IottwinmakerSyncJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig">IottwinmakerSyncJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IottwinmakerSyncJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isConstruct"></a>

```typescript
import { iottwinmakerSyncJob } from '@cdktn/provider-awscc'

iottwinmakerSyncJob.IottwinmakerSyncJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformElement"></a>

```typescript
import { iottwinmakerSyncJob } from '@cdktn/provider-awscc'

iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformResource"></a>

```typescript
import { iottwinmakerSyncJob } from '@cdktn/provider-awscc'

iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport"></a>

```typescript
import { iottwinmakerSyncJob } from '@cdktn/provider-awscc'

iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IottwinmakerSyncJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IottwinmakerSyncJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IottwinmakerSyncJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iottwinmaker_sync_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IottwinmakerSyncJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.creationDateTime">creationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.updateDateTime">updateDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncRoleInput">syncRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncSourceInput">syncSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncRole">syncRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncSource">syncSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDateTime`<sup>Required</sup> <a name="creationDateTime" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.creationDateTime"></a>

```typescript
public readonly creationDateTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updateDateTime`<sup>Required</sup> <a name="updateDateTime" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.updateDateTime"></a>

```typescript
public readonly updateDateTime: string;
```

- *Type:* string

---

##### `syncRoleInput`<sup>Optional</sup> <a name="syncRoleInput" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncRoleInput"></a>

```typescript
public readonly syncRoleInput: string;
```

- *Type:* string

---

##### `syncSourceInput`<sup>Optional</sup> <a name="syncSourceInput" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncSourceInput"></a>

```typescript
public readonly syncSourceInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `syncRole`<sup>Required</sup> <a name="syncRole" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncRole"></a>

```typescript
public readonly syncRole: string;
```

- *Type:* string

---

##### `syncSource`<sup>Required</sup> <a name="syncSource" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncSource"></a>

```typescript
public readonly syncSource: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IottwinmakerSyncJobConfig <a name="IottwinmakerSyncJobConfig" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.Initializer"></a>

```typescript
import { iottwinmakerSyncJob } from '@cdktn/provider-awscc'

const iottwinmakerSyncJobConfig: iottwinmakerSyncJob.IottwinmakerSyncJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.syncRole">syncRole</a></code> | <code>string</code> | The IAM Role that execute SyncJob. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.syncSource">syncSource</a></code> | <code>string</code> | The source of the SyncJob. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | The ID of the workspace. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `syncRole`<sup>Required</sup> <a name="syncRole" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.syncRole"></a>

```typescript
public readonly syncRole: string;
```

- *Type:* string

The IAM Role that execute SyncJob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iottwinmaker_sync_job#sync_role IottwinmakerSyncJob#sync_role}

---

##### `syncSource`<sup>Required</sup> <a name="syncSource" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.syncSource"></a>

```typescript
public readonly syncSource: string;
```

- *Type:* string

The source of the SyncJob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iottwinmaker_sync_job#sync_source IottwinmakerSyncJob#sync_source}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The ID of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iottwinmaker_sync_job#workspace_id IottwinmakerSyncJob#workspace_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iottwinmaker_sync_job#tags IottwinmakerSyncJob#tags}

---



