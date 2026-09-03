# `wisdomAssistantAssociation` Submodule <a name="`wisdomAssistantAssociation` Submodule" id="@cdktn/provider-awscc.wisdomAssistantAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAssistantAssociation <a name="WisdomAssistantAssociation" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association awscc_wisdom_assistant_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

new wisdomAssistantAssociation.WisdomAssistantAssociation(scope: Construct, id: string, config: WisdomAssistantAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig">WisdomAssistantAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig">WisdomAssistantAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putAssociation">putAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociation` <a name="putAssociation" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putAssociation"></a>

```typescript
public putAssociation(value: WisdomAssistantAssociationAssociation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putAssociation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | WisdomAssistantAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAssistantAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isConstruct"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

wisdomAssistantAssociation.WisdomAssistantAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformElement"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformResource"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WisdomAssistantAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomAssistantAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomAssistantAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAssistantAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantArn">assistantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantAssociationArn">assistantAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantAssociationId">assistantAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference">WisdomAssistantAssociationAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList">WisdomAssistantAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantIdInput">assistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationInput">associationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationTypeInput">associationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantId">assistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationType">associationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assistantArn`<sup>Required</sup> <a name="assistantArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantArn"></a>

```typescript
public readonly assistantArn: string;
```

- *Type:* string

---

##### `assistantAssociationArn`<sup>Required</sup> <a name="assistantAssociationArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantAssociationArn"></a>

```typescript
public readonly assistantAssociationArn: string;
```

- *Type:* string

---

##### `assistantAssociationId`<sup>Required</sup> <a name="assistantAssociationId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantAssociationId"></a>

```typescript
public readonly assistantAssociationId: string;
```

- *Type:* string

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.association"></a>

```typescript
public readonly association: WisdomAssistantAssociationAssociationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference">WisdomAssistantAssociationAssociationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tags"></a>

```typescript
public readonly tags: WisdomAssistantAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList">WisdomAssistantAssociationTagsList</a>

---

##### `assistantIdInput`<sup>Optional</sup> <a name="assistantIdInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantIdInput"></a>

```typescript
public readonly assistantIdInput: string;
```

- *Type:* string

---

##### `associationInput`<sup>Optional</sup> <a name="associationInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationInput"></a>

```typescript
public readonly associationInput: IResolvable | WisdomAssistantAssociationAssociation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a>

---

##### `associationTypeInput`<sup>Optional</sup> <a name="associationTypeInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationTypeInput"></a>

```typescript
public readonly associationTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WisdomAssistantAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a>[]

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAssistantAssociationAssociation <a name="WisdomAssistantAssociationAssociation" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

const wisdomAssistantAssociationAssociation: wisdomAssistantAssociation.WisdomAssistantAssociationAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.property.externalBedrockKnowledgeBaseConfig">externalBedrockKnowledgeBaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#external_bedrock_knowledge_base_config WisdomAssistantAssociation#external_bedrock_knowledge_base_config}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#knowledge_base_id WisdomAssistantAssociation#knowledge_base_id}. |

---

##### `externalBedrockKnowledgeBaseConfig`<sup>Optional</sup> <a name="externalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.property.externalBedrockKnowledgeBaseConfig"></a>

```typescript
public readonly externalBedrockKnowledgeBaseConfig: WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#external_bedrock_knowledge_base_config WisdomAssistantAssociation#external_bedrock_knowledge_base_config}.

---

##### `knowledgeBaseId`<sup>Optional</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#knowledge_base_id WisdomAssistantAssociation#knowledge_base_id}.

---

### WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig <a name="WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

const wisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig: wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.property.accessRoleArn">accessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#access_role_arn WisdomAssistantAssociation#access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.property.bedrockKnowledgeBaseArn">bedrockKnowledgeBaseArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#bedrock_knowledge_base_arn WisdomAssistantAssociation#bedrock_knowledge_base_arn}. |

---

##### `accessRoleArn`<sup>Optional</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.property.accessRoleArn"></a>

```typescript
public readonly accessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#access_role_arn WisdomAssistantAssociation#access_role_arn}.

---

##### `bedrockKnowledgeBaseArn`<sup>Optional</sup> <a name="bedrockKnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.property.bedrockKnowledgeBaseArn"></a>

```typescript
public readonly bedrockKnowledgeBaseArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#bedrock_knowledge_base_arn WisdomAssistantAssociation#bedrock_knowledge_base_arn}.

---

### WisdomAssistantAssociationConfig <a name="WisdomAssistantAssociationConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

const wisdomAssistantAssociationConfig: wisdomAssistantAssociation.WisdomAssistantAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.assistantId">assistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#assistant_id WisdomAssistantAssociation#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#association WisdomAssistantAssociation#association}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.associationType">associationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#association_type WisdomAssistantAssociation#association_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#tags WisdomAssistantAssociation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#assistant_id WisdomAssistantAssociation#assistant_id}.

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.association"></a>

```typescript
public readonly association: WisdomAssistantAssociationAssociation;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#association WisdomAssistantAssociation#association}.

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#association_type WisdomAssistantAssociation#association_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WisdomAssistantAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#tags WisdomAssistantAssociation#tags}.

---

### WisdomAssistantAssociationTags <a name="WisdomAssistantAssociationTags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

const wisdomAssistantAssociationTags: wisdomAssistantAssociation.WisdomAssistantAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#key WisdomAssistantAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#value WisdomAssistantAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#key WisdomAssistantAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_assistant_association#value WisdomAssistantAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference <a name="WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

new wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resetAccessRoleArn">resetAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resetBedrockKnowledgeBaseArn">resetBedrockKnowledgeBaseArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessRoleArn` <a name="resetAccessRoleArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resetAccessRoleArn"></a>

```typescript
public resetAccessRoleArn(): void
```

##### `resetBedrockKnowledgeBaseArn` <a name="resetBedrockKnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resetBedrockKnowledgeBaseArn"></a>

```typescript
public resetBedrockKnowledgeBaseArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.accessRoleArnInput">accessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.bedrockKnowledgeBaseArnInput">bedrockKnowledgeBaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.accessRoleArn">accessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.bedrockKnowledgeBaseArn">bedrockKnowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRoleArnInput`<sup>Optional</sup> <a name="accessRoleArnInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.accessRoleArnInput"></a>

```typescript
public readonly accessRoleArnInput: string;
```

- *Type:* string

---

##### `bedrockKnowledgeBaseArnInput`<sup>Optional</sup> <a name="bedrockKnowledgeBaseArnInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.bedrockKnowledgeBaseArnInput"></a>

```typescript
public readonly bedrockKnowledgeBaseArnInput: string;
```

- *Type:* string

---

##### `accessRoleArn`<sup>Required</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.accessRoleArn"></a>

```typescript
public readonly accessRoleArn: string;
```

- *Type:* string

---

##### `bedrockKnowledgeBaseArn`<sup>Required</sup> <a name="bedrockKnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.bedrockKnowledgeBaseArn"></a>

```typescript
public readonly bedrockKnowledgeBaseArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a>

---


### WisdomAssistantAssociationAssociationOutputReference <a name="WisdomAssistantAssociationAssociationOutputReference" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

new wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.putExternalBedrockKnowledgeBaseConfig">putExternalBedrockKnowledgeBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resetExternalBedrockKnowledgeBaseConfig">resetExternalBedrockKnowledgeBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resetKnowledgeBaseId">resetKnowledgeBaseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalBedrockKnowledgeBaseConfig` <a name="putExternalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.putExternalBedrockKnowledgeBaseConfig"></a>

```typescript
public putExternalBedrockKnowledgeBaseConfig(value: WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.putExternalBedrockKnowledgeBaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a>

---

##### `resetExternalBedrockKnowledgeBaseConfig` <a name="resetExternalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resetExternalBedrockKnowledgeBaseConfig"></a>

```typescript
public resetExternalBedrockKnowledgeBaseConfig(): void
```

##### `resetKnowledgeBaseId` <a name="resetKnowledgeBaseId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resetKnowledgeBaseId"></a>

```typescript
public resetKnowledgeBaseId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.externalBedrockKnowledgeBaseConfig">externalBedrockKnowledgeBaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.externalBedrockKnowledgeBaseConfigInput">externalBedrockKnowledgeBaseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalBedrockKnowledgeBaseConfig`<sup>Required</sup> <a name="externalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.externalBedrockKnowledgeBaseConfig"></a>

```typescript
public readonly externalBedrockKnowledgeBaseConfig: WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference</a>

---

##### `externalBedrockKnowledgeBaseConfigInput`<sup>Optional</sup> <a name="externalBedrockKnowledgeBaseConfigInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.externalBedrockKnowledgeBaseConfigInput"></a>

```typescript
public readonly externalBedrockKnowledgeBaseConfigInput: IResolvable | WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a>

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.knowledgeBaseIdInput"></a>

```typescript
public readonly knowledgeBaseIdInput: string;
```

- *Type:* string

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomAssistantAssociationAssociation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a>

---


### WisdomAssistantAssociationTagsList <a name="WisdomAssistantAssociationTagsList" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

new wisdomAssistantAssociation.WisdomAssistantAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.get"></a>

```typescript
public get(index: number): WisdomAssistantAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomAssistantAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a>[]

---


### WisdomAssistantAssociationTagsOutputReference <a name="WisdomAssistantAssociationTagsOutputReference" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer"></a>

```typescript
import { wisdomAssistantAssociation } from '@cdktn/provider-awscc'

new wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomAssistantAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags">WisdomAssistantAssociationTags</a>

---



