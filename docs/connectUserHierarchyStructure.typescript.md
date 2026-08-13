# `connectUserHierarchyStructure` Submodule <a name="`connectUserHierarchyStructure` Submodule" id="@cdktn/provider-awscc.connectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyStructure <a name="ConnectUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

new connectUserHierarchyStructure.ConnectUserHierarchyStructure(scope: Construct, id: string, config: ConnectUserHierarchyStructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig">ConnectUserHierarchyStructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig">ConnectUserHierarchyStructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure">putUserHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetUserHierarchyStructure">resetUserHierarchyStructure</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUserHierarchyStructure` <a name="putUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure"></a>

```typescript
public putUserHierarchyStructure(value: ConnectUserHierarchyStructureUserHierarchyStructure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---

##### `resetUserHierarchyStructure` <a name="resetUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetUserHierarchyStructure"></a>

```typescript
public resetUserHierarchyStructure(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectUserHierarchyStructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectUserHierarchyStructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUserHierarchyStructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructure">userHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureArn">userHierarchyStructureArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureInput">userHierarchyStructureInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userHierarchyStructure`<sup>Required</sup> <a name="userHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructure"></a>

```typescript
public readonly userHierarchyStructure: ConnectUserHierarchyStructureUserHierarchyStructureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a>

---

##### `userHierarchyStructureArn`<sup>Required</sup> <a name="userHierarchyStructureArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureArn"></a>

```typescript
public readonly userHierarchyStructureArn: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `userHierarchyStructureInput`<sup>Optional</sup> <a name="userHierarchyStructureInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureInput"></a>

```typescript
public readonly userHierarchyStructureInput: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyStructureConfig <a name="ConnectUserHierarchyStructureConfig" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

const connectUserHierarchyStructureConfig: connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.userHierarchyStructure">userHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | Information about the hierarchy structure. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#instance_arn ConnectUserHierarchyStructure#instance_arn}

---

##### `userHierarchyStructure`<sup>Optional</sup> <a name="userHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.userHierarchyStructure"></a>

```typescript
public readonly userHierarchyStructure: ConnectUserHierarchyStructureUserHierarchyStructure;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

Information about the hierarchy structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#user_hierarchy_structure ConnectUserHierarchyStructure#user_hierarchy_structure}

---

### ConnectUserHierarchyStructureUserHierarchyStructure <a name="ConnectUserHierarchyStructureUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

const connectUserHierarchyStructureUserHierarchyStructure: connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFive">levelFive</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | Information about level five. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFour">levelFour</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | Information about level four. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelOne">levelOne</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | Information about level one. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelThree">levelThree</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | Information about level three. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | Information about level two. |

---

##### `levelFive`<sup>Optional</sup> <a name="levelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFive"></a>

```typescript
public readonly levelFive: ConnectUserHierarchyStructureUserHierarchyStructureLevelFive;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

Information about level five.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

##### `levelFour`<sup>Optional</sup> <a name="levelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFour"></a>

```typescript
public readonly levelFour: ConnectUserHierarchyStructureUserHierarchyStructureLevelFour;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

Information about level four.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

##### `levelOne`<sup>Optional</sup> <a name="levelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelOne"></a>

```typescript
public readonly levelOne: ConnectUserHierarchyStructureUserHierarchyStructureLevelOne;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

Information about level one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

##### `levelThree`<sup>Optional</sup> <a name="levelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelThree"></a>

```typescript
public readonly levelThree: ConnectUserHierarchyStructureUserHierarchyStructureLevelThree;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

Information about level three.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

##### `levelTwo`<sup>Optional</sup> <a name="levelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelTwo"></a>

```typescript
public readonly levelTwo: ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

Information about level two.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFive <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

const connectUserHierarchyStructureUserHierarchyStructureLevelFive: connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.name">name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFour <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

const connectUserHierarchyStructureUserHierarchyStructureLevelFour: connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.name">name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelOne <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

const connectUserHierarchyStructureUserHierarchyStructureLevelOne: connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.name">name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelThree <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

const connectUserHierarchyStructureUserHierarchyStructureLevelThree: connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.name">name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

const connectUserHierarchyStructureUserHierarchyStructureLevelTwo: connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.name">name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

new connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelArn"></a>

```typescript
public resetHierarchyLevelArn(): void
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelId"></a>

```typescript
public resetHierarchyLevelId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArnInput"></a>

```typescript
public readonly hierarchyLevelArnInput: string;
```

- *Type:* string

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelIdInput"></a>

```typescript
public readonly hierarchyLevelIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelFive;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

new connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelArn"></a>

```typescript
public resetHierarchyLevelArn(): void
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelId"></a>

```typescript
public resetHierarchyLevelId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArnInput"></a>

```typescript
public readonly hierarchyLevelArnInput: string;
```

- *Type:* string

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelIdInput"></a>

```typescript
public readonly hierarchyLevelIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelFour;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

new connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelArn"></a>

```typescript
public resetHierarchyLevelArn(): void
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelId"></a>

```typescript
public resetHierarchyLevelId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArnInput"></a>

```typescript
public readonly hierarchyLevelArnInput: string;
```

- *Type:* string

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelIdInput"></a>

```typescript
public readonly hierarchyLevelIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelOne;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

new connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelArn"></a>

```typescript
public resetHierarchyLevelArn(): void
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelId"></a>

```typescript
public resetHierarchyLevelId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArnInput"></a>

```typescript
public readonly hierarchyLevelArnInput: string;
```

- *Type:* string

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelIdInput"></a>

```typescript
public readonly hierarchyLevelIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelThree;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

new connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelArn"></a>

```typescript
public resetHierarchyLevelArn(): void
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelId"></a>

```typescript
public resetHierarchyLevelId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArnInput"></a>

```typescript
public readonly hierarchyLevelArnInput: string;
```

- *Type:* string

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelIdInput"></a>

```typescript
public readonly hierarchyLevelIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn"></a>

```typescript
public readonly hierarchyLevelArn: string;
```

- *Type:* string

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId"></a>

```typescript
public readonly hierarchyLevelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyStructure } from '@cdktn/provider-awscc'

new connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive">putLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour">putLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne">putLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree">putLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo">putLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFive">resetLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFour">resetLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelOne">resetLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelThree">resetLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelTwo">resetLevelTwo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLevelFive` <a name="putLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive"></a>

```typescript
public putLevelFive(value: ConnectUserHierarchyStructureUserHierarchyStructureLevelFive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---

##### `putLevelFour` <a name="putLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour"></a>

```typescript
public putLevelFour(value: ConnectUserHierarchyStructureUserHierarchyStructureLevelFour): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---

##### `putLevelOne` <a name="putLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne"></a>

```typescript
public putLevelOne(value: ConnectUserHierarchyStructureUserHierarchyStructureLevelOne): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---

##### `putLevelThree` <a name="putLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree"></a>

```typescript
public putLevelThree(value: ConnectUserHierarchyStructureUserHierarchyStructureLevelThree): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---

##### `putLevelTwo` <a name="putLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo"></a>

```typescript
public putLevelTwo(value: ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---

##### `resetLevelFive` <a name="resetLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFive"></a>

```typescript
public resetLevelFive(): void
```

##### `resetLevelFour` <a name="resetLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFour"></a>

```typescript
public resetLevelFour(): void
```

##### `resetLevelOne` <a name="resetLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelOne"></a>

```typescript
public resetLevelOne(): void
```

##### `resetLevelThree` <a name="resetLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelThree"></a>

```typescript
public resetLevelThree(): void
```

##### `resetLevelTwo` <a name="resetLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelTwo"></a>

```typescript
public resetLevelTwo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive">levelFive</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour">levelFour</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne">levelOne</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree">levelThree</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFiveInput">levelFiveInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFourInput">levelFourInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOneInput">levelOneInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThreeInput">levelThreeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwoInput">levelTwoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelFive`<sup>Required</sup> <a name="levelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive"></a>

```typescript
public readonly levelFive: ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a>

---

##### `levelFour`<sup>Required</sup> <a name="levelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour"></a>

```typescript
public readonly levelFour: ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a>

---

##### `levelOne`<sup>Required</sup> <a name="levelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne"></a>

```typescript
public readonly levelOne: ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a>

---

##### `levelThree`<sup>Required</sup> <a name="levelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree"></a>

```typescript
public readonly levelThree: ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a>

---

##### `levelTwo`<sup>Required</sup> <a name="levelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo"></a>

```typescript
public readonly levelTwo: ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a>

---

##### `levelFiveInput`<sup>Optional</sup> <a name="levelFiveInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFiveInput"></a>

```typescript
public readonly levelFiveInput: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelFive;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---

##### `levelFourInput`<sup>Optional</sup> <a name="levelFourInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFourInput"></a>

```typescript
public readonly levelFourInput: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelFour;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---

##### `levelOneInput`<sup>Optional</sup> <a name="levelOneInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOneInput"></a>

```typescript
public readonly levelOneInput: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelOne;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---

##### `levelThreeInput`<sup>Optional</sup> <a name="levelThreeInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThreeInput"></a>

```typescript
public readonly levelThreeInput: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelThree;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---

##### `levelTwoInput`<sup>Optional</sup> <a name="levelTwoInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwoInput"></a>

```typescript
public readonly levelTwoInput: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---



