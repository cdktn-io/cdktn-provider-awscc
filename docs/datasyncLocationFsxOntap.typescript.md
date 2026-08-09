# `datasyncLocationFsxOntap` Submodule <a name="`datasyncLocationFsxOntap` Submodule" id="@cdktn/provider-awscc.datasyncLocationFsxOntap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxOntap <a name="DatasyncLocationFsxOntap" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap awscc_datasync_location_fsx_ontap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntap(scope: Construct, id: string, config: DatasyncLocationFsxOntapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig">DatasyncLocationFsxOntapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig">DatasyncLocationFsxOntapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol">putProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProtocol` <a name="putProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol"></a>

```typescript
public putProtocol(value: DatasyncLocationFsxOntapProtocol): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags"></a>

```typescript
public putTags(value: IResolvable | DatasyncLocationFsxOntapTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>[]

---

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationFsxOntap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationFsxOntap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationFsxOntap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocol">protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference">DatasyncLocationFsxOntapProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList">DatasyncLocationFsxOntapTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocolInput">protocolInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArnInput">storageVirtualMachineArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArn">storageVirtualMachineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fsxFilesystemArn"></a>

```typescript
public readonly fsxFilesystemArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocol"></a>

```typescript
public readonly protocol: DatasyncLocationFsxOntapProtocolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference">DatasyncLocationFsxOntapProtocolOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tags"></a>

```typescript
public readonly tags: DatasyncLocationFsxOntapTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList">DatasyncLocationFsxOntapTagsList</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocolInput"></a>

```typescript
public readonly protocolInput: IResolvable | DatasyncLocationFsxOntapProtocol;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArnsInput"></a>

```typescript
public readonly securityGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `storageVirtualMachineArnInput`<sup>Optional</sup> <a name="storageVirtualMachineArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArnInput"></a>

```typescript
public readonly storageVirtualMachineArnInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DatasyncLocationFsxOntapTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>[]

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

---

##### `storageVirtualMachineArn`<sup>Required</sup> <a name="storageVirtualMachineArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArn"></a>

```typescript
public readonly storageVirtualMachineArn: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxOntapConfig <a name="DatasyncLocationFsxOntapConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapConfig: datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | The ARNs of the security groups that are to use to configure the FSx ONTAP file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.storageVirtualMachineArn">storageVirtualMachineArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the FSx ONTAP SVM. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.protocol">protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a></code> | Configuration settings for NFS or SMB protocol. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | A subdirectory in the location's path. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

The ARNs of the security groups that are to use to configure the FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#security_group_arns DatasyncLocationFsxOntap#security_group_arns}

---

##### `storageVirtualMachineArn`<sup>Required</sup> <a name="storageVirtualMachineArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.storageVirtualMachineArn"></a>

```typescript
public readonly storageVirtualMachineArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the FSx ONTAP SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#storage_virtual_machine_arn DatasyncLocationFsxOntap#storage_virtual_machine_arn}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.protocol"></a>

```typescript
public readonly protocol: DatasyncLocationFsxOntapProtocol;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

Configuration settings for NFS or SMB protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#protocol DatasyncLocationFsxOntap#protocol}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

A subdirectory in the location's path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#subdirectory DatasyncLocationFsxOntap#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DatasyncLocationFsxOntapTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#tags DatasyncLocationFsxOntap#tags}

---

### DatasyncLocationFsxOntapProtocol <a name="DatasyncLocationFsxOntapProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapProtocol: datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a></code> | NFS protocol configuration for FSx ONTAP file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.smb">smb</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a></code> | SMB protocol configuration for FSx ONTAP file system. |

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.nfs"></a>

```typescript
public readonly nfs: DatasyncLocationFsxOntapProtocolNfs;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

NFS protocol configuration for FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#nfs DatasyncLocationFsxOntap#nfs}

---

##### `smb`<sup>Optional</sup> <a name="smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.smb"></a>

```typescript
public readonly smb: DatasyncLocationFsxOntapProtocolSmb;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

SMB protocol configuration for FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#smb DatasyncLocationFsxOntap#smb}

---

### DatasyncLocationFsxOntapProtocolNfs <a name="DatasyncLocationFsxOntapProtocolNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapProtocolNfs: datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | The NFS mount options that DataSync can use to mount your NFS share. |

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationFsxOntapProtocolNfsMountOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

The NFS mount options that DataSync can use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}

---

### DatasyncLocationFsxOntapProtocolNfsMountOptions <a name="DatasyncLocationFsxOntapProtocolNfsMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapProtocolNfsMountOptions: datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.property.version">version</a></code> | <code>string</code> | The specific NFS version that you want DataSync to use to mount your NFS share. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The specific NFS version that you want DataSync to use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}

---

### DatasyncLocationFsxOntapProtocolSmb <a name="DatasyncLocationFsxOntapProtocolSmb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapProtocolSmb: datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.domain">domain</a></code> | <code>string</code> | The name of the Windows domain that the SMB server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | The mount options used by DataSync to access the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.password">password</a></code> | <code>string</code> | The password of the user who can mount the share and has the permissions to access files and folders in the SMB share. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.user">user</a></code> | <code>string</code> | The user who can mount the share, has the permissions to access files and folders in the SMB share. |

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#cmk_secret_config DatasyncLocationFsxOntap#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#custom_secret_config DatasyncLocationFsxOntap#custom_secret_config}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The name of the Windows domain that the SMB server belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#domain DatasyncLocationFsxOntap#domain}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationFsxOntapProtocolSmbMountOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

The mount options used by DataSync to access the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#password DatasyncLocationFsxOntap#password}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The user who can mount the share, has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#user DatasyncLocationFsxOntap#user}

---

### DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapProtocolSmbCmkSecretConfig: datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#kms_key_arn DatasyncLocationFsxOntap#kms_key_arn}

---

### DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapProtocolSmbCustomSecretConfig: datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretArn">secretArn</a></code> | <code>string</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secretAccessRoleArn`<sup>Optional</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#secret_access_role_arn DatasyncLocationFsxOntap#secret_access_role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#secret_arn DatasyncLocationFsxOntap#secret_arn}

---

### DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapProtocolSmbManagedSecretConfig: datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig = { ... }
```


### DatasyncLocationFsxOntapProtocolSmbMountOptions <a name="DatasyncLocationFsxOntapProtocolSmbMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapProtocolSmbMountOptions: datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.property.version">version</a></code> | <code>string</code> | The specific SMB version that you want DataSync to use to mount your SMB share. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The specific SMB version that you want DataSync to use to mount your SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}

---

### DatasyncLocationFsxOntapTags <a name="DatasyncLocationFsxOntapTags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const datasyncLocationFsxOntapTags: datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.key">key</a></code> | <code>string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.value">value</a></code> | <code>string</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#key DatasyncLocationFsxOntap#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_fsx_ontap#value DatasyncLocationFsxOntap#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference <a name="DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapProtocolNfsMountOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

---


### DatasyncLocationFsxOntapProtocolNfsOutputReference <a name="DatasyncLocationFsxOntapProtocolNfsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMountOptions` <a name="putMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions"></a>

```typescript
public putMountOptions(value: DatasyncLocationFsxOntapProtocolNfsMountOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

---

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: IResolvable | DatasyncLocationFsxOntapProtocolNfsMountOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapProtocolNfs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

---


### DatasyncLocationFsxOntapProtocolOutputReference <a name="DatasyncLocationFsxOntapProtocolOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb">putSmb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetSmb">resetSmb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfs` <a name="putNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs"></a>

```typescript
public putNfs(value: DatasyncLocationFsxOntapProtocolNfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

---

##### `putSmb` <a name="putSmb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb"></a>

```typescript
public putSmb(value: DatasyncLocationFsxOntapProtocolSmb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

---

##### `resetNfs` <a name="resetNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetNfs"></a>

```typescript
public resetNfs(): void
```

##### `resetSmb` <a name="resetSmb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetSmb"></a>

```typescript
public resetSmb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference">DatasyncLocationFsxOntapProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference">DatasyncLocationFsxOntapProtocolSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfsInput">nfsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smbInput">smbInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfs"></a>

```typescript
public readonly nfs: DatasyncLocationFsxOntapProtocolNfsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference">DatasyncLocationFsxOntapProtocolNfsOutputReference</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smb"></a>

```typescript
public readonly smb: DatasyncLocationFsxOntapProtocolSmbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference">DatasyncLocationFsxOntapProtocolSmbOutputReference</a>

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfsInput"></a>

```typescript
public readonly nfsInput: IResolvable | DatasyncLocationFsxOntapProtocolNfs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

---

##### `smbInput`<sup>Optional</sup> <a name="smbInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smbInput"></a>

```typescript
public readonly smbInput: IResolvable | DatasyncLocationFsxOntapProtocolSmb;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapProtocol;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

---


### DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

---


### DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn">resetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretAccessRoleArn` <a name="resetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```typescript
public resetSecretAccessRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secretAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretAccessRoleArnInput`<sup>Optional</sup> <a name="secretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```typescript
public readonly secretAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

---


### DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a>

---


### DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapProtocolSmbMountOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

---


### DatasyncLocationFsxOntapProtocolSmbOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig">putCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig">putCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCmkSecretConfig">resetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCustomSecretConfig">resetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCmkSecretConfig` <a name="putCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig"></a>

```typescript
public putCmkSecretConfig(value: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

---

##### `putCustomSecretConfig` <a name="putCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig"></a>

```typescript
public putCustomSecretConfig(value: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions"></a>

```typescript
public putMountOptions(value: DatasyncLocationFsxOntapProtocolSmbMountOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

---

##### `resetCmkSecretConfig` <a name="resetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCmkSecretConfig"></a>

```typescript
public resetCmkSecretConfig(): void
```

##### `resetCustomSecretConfig` <a name="resetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCustomSecretConfig"></a>

```typescript
public resetCustomSecretConfig(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfigInput">cmkSecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfigInput">customSecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a>

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig"></a>

```typescript
public readonly managedSecretConfig: DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a>

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a>

---

##### `cmkSecretConfigInput`<sup>Optional</sup> <a name="cmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfigInput"></a>

```typescript
public readonly cmkSecretConfigInput: IResolvable | DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

---

##### `customSecretConfigInput`<sup>Optional</sup> <a name="customSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfigInput"></a>

```typescript
public readonly customSecretConfigInput: IResolvable | DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: IResolvable | DatasyncLocationFsxOntapProtocolSmbMountOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapProtocolSmb;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

---


### DatasyncLocationFsxOntapTagsList <a name="DatasyncLocationFsxOntapTagsList" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get"></a>

```typescript
public get(index: number): DatasyncLocationFsxOntapTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>[]

---


### DatasyncLocationFsxOntapTagsOutputReference <a name="DatasyncLocationFsxOntapTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationFsxOntapTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>

---



