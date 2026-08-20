# `opensearchserverlessCollectionGroup` Submodule <a name="`opensearchserverlessCollectionGroup` Submodule" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollectionGroup <a name="OpensearchserverlessCollectionGroup" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group awscc_opensearchserverless_collection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

new opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup(scope: Construct, id: string, config: OpensearchserverlessCollectionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig">OpensearchserverlessCollectionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig">OpensearchserverlessCollectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits">putCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetCapacityLimits">resetCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetGeneration">resetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityLimits` <a name="putCapacityLimits" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits"></a>

```typescript
public putCapacityLimits(value: OpensearchserverlessCollectionGroupCapacityLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | OpensearchserverlessCollectionGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a>[]

---

##### `resetCapacityLimits` <a name="resetCapacityLimits" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetCapacityLimits"></a>

```typescript
public resetCapacityLimits(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGeneration` <a name="resetGeneration" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetGeneration"></a>

```typescript
public resetGeneration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserverlessCollectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserverlessCollectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimits">capacityLimits</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference">OpensearchserverlessCollectionGroupCapacityLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.collectionGroupId">collectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList">OpensearchserverlessCollectionGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimitsInput">capacityLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generationInput">generationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicasInput">standbyReplicasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicas">standbyReplicas</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimits"></a>

```typescript
public readonly capacityLimits: OpensearchserverlessCollectionGroupCapacityLimitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference">OpensearchserverlessCollectionGroupCapacityLimitsOutputReference</a>

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.collectionGroupId"></a>

```typescript
public readonly collectionGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tags"></a>

```typescript
public readonly tags: OpensearchserverlessCollectionGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList">OpensearchserverlessCollectionGroupTagsList</a>

---

##### `capacityLimitsInput`<sup>Optional</sup> <a name="capacityLimitsInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimitsInput"></a>

```typescript
public readonly capacityLimitsInput: IResolvable | OpensearchserverlessCollectionGroupCapacityLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generationInput"></a>

```typescript
public readonly generationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `standbyReplicasInput`<sup>Optional</sup> <a name="standbyReplicasInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicasInput"></a>

```typescript
public readonly standbyReplicasInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OpensearchserverlessCollectionGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicas"></a>

```typescript
public readonly standbyReplicas: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionGroupCapacityLimits <a name="OpensearchserverlessCollectionGroupCapacityLimits" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.Initializer"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

const opensearchserverlessCollectionGroupCapacityLimits: opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxIndexingCapacityInOcu">maxIndexingCapacityInOcu</a></code> | <code>number</code> | The maximum indexing capacity for collections in the group. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxSearchCapacityInOcu">maxSearchCapacityInOcu</a></code> | <code>number</code> | The maximum search capacity for collections in the group. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minIndexingCapacityInOcu">minIndexingCapacityInOcu</a></code> | <code>number</code> | The minimum indexing capacity for collections in the group. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minSearchCapacityInOcu">minSearchCapacityInOcu</a></code> | <code>number</code> | The minimum search capacity for collections in the group. |

---

##### `maxIndexingCapacityInOcu`<sup>Optional</sup> <a name="maxIndexingCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxIndexingCapacityInOcu"></a>

```typescript
public readonly maxIndexingCapacityInOcu: number;
```

- *Type:* number

The maximum indexing capacity for collections in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#max_indexing_capacity_in_ocu}

---

##### `maxSearchCapacityInOcu`<sup>Optional</sup> <a name="maxSearchCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxSearchCapacityInOcu"></a>

```typescript
public readonly maxSearchCapacityInOcu: number;
```

- *Type:* number

The maximum search capacity for collections in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu OpensearchserverlessCollectionGroup#max_search_capacity_in_ocu}

---

##### `minIndexingCapacityInOcu`<sup>Optional</sup> <a name="minIndexingCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minIndexingCapacityInOcu"></a>

```typescript
public readonly minIndexingCapacityInOcu: number;
```

- *Type:* number

The minimum indexing capacity for collections in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#min_indexing_capacity_in_ocu}

---

##### `minSearchCapacityInOcu`<sup>Optional</sup> <a name="minSearchCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minSearchCapacityInOcu"></a>

```typescript
public readonly minSearchCapacityInOcu: number;
```

- *Type:* number

The minimum search capacity for collections in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu OpensearchserverlessCollectionGroup#min_search_capacity_in_ocu}

---

### OpensearchserverlessCollectionGroupConfig <a name="OpensearchserverlessCollectionGroupConfig" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.Initializer"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

const opensearchserverlessCollectionGroupConfig: opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.name">name</a></code> | <code>string</code> | The name of the collection group. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.standbyReplicas">standbyReplicas</a></code> | <code>string</code> | Indicates whether standby replicas are used for the collection group. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.capacityLimits">capacityLimits</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.description">description</a></code> | <code>string</code> | The description of the collection group. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.generation">generation</a></code> | <code>string</code> | The generation of Amazon OpenSearch Serverless for the collection group. Valid values are CLASSIC and NEXTGEN. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#name OpensearchserverlessCollectionGroup#name}

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.standbyReplicas"></a>

```typescript
public readonly standbyReplicas: string;
```

- *Type:* string

Indicates whether standby replicas are used for the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#standby_replicas OpensearchserverlessCollectionGroup#standby_replicas}

---

##### `capacityLimits`<sup>Optional</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.capacityLimits"></a>

```typescript
public readonly capacityLimits: OpensearchserverlessCollectionGroupCapacityLimits;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#description OpensearchserverlessCollectionGroup#description}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

The generation of Amazon OpenSearch Serverless for the collection group. Valid values are CLASSIC and NEXTGEN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#generation OpensearchserverlessCollectionGroup#generation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OpensearchserverlessCollectionGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}

---

### OpensearchserverlessCollectionGroupTags <a name="OpensearchserverlessCollectionGroupTags" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags.Initializer"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

const opensearchserverlessCollectionGroupTags: opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags.property.key">key</a></code> | <code>string</code> | The key in the key-value pair. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags.property.value">value</a></code> | <code>string</code> | The value in the key-value pair. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#key OpensearchserverlessCollectionGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection_group#value OpensearchserverlessCollectionGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionGroupCapacityLimitsOutputReference <a name="OpensearchserverlessCollectionGroupCapacityLimitsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

new opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxIndexingCapacityInOcu">resetMaxIndexingCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxSearchCapacityInOcu">resetMaxSearchCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinIndexingCapacityInOcu">resetMinIndexingCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinSearchCapacityInOcu">resetMinSearchCapacityInOcu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIndexingCapacityInOcu` <a name="resetMaxIndexingCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxIndexingCapacityInOcu"></a>

```typescript
public resetMaxIndexingCapacityInOcu(): void
```

##### `resetMaxSearchCapacityInOcu` <a name="resetMaxSearchCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxSearchCapacityInOcu"></a>

```typescript
public resetMaxSearchCapacityInOcu(): void
```

##### `resetMinIndexingCapacityInOcu` <a name="resetMinIndexingCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinIndexingCapacityInOcu"></a>

```typescript
public resetMinIndexingCapacityInOcu(): void
```

##### `resetMinSearchCapacityInOcu` <a name="resetMinSearchCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinSearchCapacityInOcu"></a>

```typescript
public resetMinSearchCapacityInOcu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcuInput">maxIndexingCapacityInOcuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcuInput">maxSearchCapacityInOcuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcuInput">minIndexingCapacityInOcuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcuInput">minSearchCapacityInOcuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">maxIndexingCapacityInOcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">maxSearchCapacityInOcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">minIndexingCapacityInOcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu">minSearchCapacityInOcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxIndexingCapacityInOcuInput`<sup>Optional</sup> <a name="maxIndexingCapacityInOcuInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcuInput"></a>

```typescript
public readonly maxIndexingCapacityInOcuInput: number;
```

- *Type:* number

---

##### `maxSearchCapacityInOcuInput`<sup>Optional</sup> <a name="maxSearchCapacityInOcuInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcuInput"></a>

```typescript
public readonly maxSearchCapacityInOcuInput: number;
```

- *Type:* number

---

##### `minIndexingCapacityInOcuInput`<sup>Optional</sup> <a name="minIndexingCapacityInOcuInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcuInput"></a>

```typescript
public readonly minIndexingCapacityInOcuInput: number;
```

- *Type:* number

---

##### `minSearchCapacityInOcuInput`<sup>Optional</sup> <a name="minSearchCapacityInOcuInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcuInput"></a>

```typescript
public readonly minSearchCapacityInOcuInput: number;
```

- *Type:* number

---

##### `maxIndexingCapacityInOcu`<sup>Required</sup> <a name="maxIndexingCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```typescript
public readonly maxIndexingCapacityInOcu: number;
```

- *Type:* number

---

##### `maxSearchCapacityInOcu`<sup>Required</sup> <a name="maxSearchCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```typescript
public readonly maxSearchCapacityInOcu: number;
```

- *Type:* number

---

##### `minIndexingCapacityInOcu`<sup>Required</sup> <a name="minIndexingCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```typescript
public readonly minIndexingCapacityInOcu: number;
```

- *Type:* number

---

##### `minSearchCapacityInOcu`<sup>Required</sup> <a name="minSearchCapacityInOcu" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```typescript
public readonly minSearchCapacityInOcu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserverlessCollectionGroupCapacityLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>

---


### OpensearchserverlessCollectionGroupTagsList <a name="OpensearchserverlessCollectionGroupTagsList" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.Initializer"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

new opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.get"></a>

```typescript
public get(index: number): OpensearchserverlessCollectionGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserverlessCollectionGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a>[]

---


### OpensearchserverlessCollectionGroupTagsOutputReference <a name="OpensearchserverlessCollectionGroupTagsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer"></a>

```typescript
import { opensearchserverlessCollectionGroup } from '@cdktn/provider-awscc'

new opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserverlessCollectionGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupTags">OpensearchserverlessCollectionGroupTags</a>

---



