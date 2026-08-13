# `entityresolutionSchemaMapping` Submodule <a name="`entityresolutionSchemaMapping` Submodule" id="@cdktn/provider-awscc.entityresolutionSchemaMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionSchemaMapping <a name="EntityresolutionSchemaMapping" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping awscc_entityresolution_schema_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new entityresolutionSchemaMapping.EntityresolutionSchemaMapping(scope: Construct, id: string, config: EntityresolutionSchemaMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig">EntityresolutionSchemaMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig">EntityresolutionSchemaMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields">putMappedInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMappedInputFields` <a name="putMappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields"></a>

```typescript
public putMappedInputFields(value: IResolvable | EntityresolutionSchemaMappingMappedInputFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags"></a>

```typescript
public putTags(value: IResolvable | EntityresolutionSchemaMappingTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EntityresolutionSchemaMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EntityresolutionSchemaMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionSchemaMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.hasWorkflows">hasWorkflows</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFields">mappedInputFields</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList">EntityresolutionSchemaMappingMappedInputFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaArn">schemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList">EntityresolutionSchemaMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFieldsInput">mappedInputFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `hasWorkflows`<sup>Required</sup> <a name="hasWorkflows" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.hasWorkflows"></a>

```typescript
public readonly hasWorkflows: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mappedInputFields`<sup>Required</sup> <a name="mappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFields"></a>

```typescript
public readonly mappedInputFields: EntityresolutionSchemaMappingMappedInputFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList">EntityresolutionSchemaMappingMappedInputFieldsList</a>

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tags"></a>

```typescript
public readonly tags: EntityresolutionSchemaMappingTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList">EntityresolutionSchemaMappingTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `mappedInputFieldsInput`<sup>Optional</sup> <a name="mappedInputFieldsInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFieldsInput"></a>

```typescript
public readonly mappedInputFieldsInput: IResolvable | EntityresolutionSchemaMappingMappedInputFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EntityresolutionSchemaMappingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionSchemaMappingConfig <a name="EntityresolutionSchemaMappingConfig" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.Initializer"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

const entityresolutionSchemaMappingConfig: entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.mappedInputFields">mappedInputFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]</code> | The SchemaMapping attributes input. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.description">description</a></code> | <code>string</code> | The description of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mappedInputFields`<sup>Required</sup> <a name="mappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.mappedInputFields"></a>

```typescript
public readonly mappedInputFields: IResolvable | EntityresolutionSchemaMappingMappedInputFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]

The SchemaMapping attributes input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#mapped_input_fields EntityresolutionSchemaMapping#mapped_input_fields}

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The name of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#schema_name EntityresolutionSchemaMapping#schema_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#description EntityresolutionSchemaMapping#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EntityresolutionSchemaMappingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}.

---

### EntityresolutionSchemaMappingMappedInputFields <a name="EntityresolutionSchemaMappingMappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.Initializer"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

const entityresolutionSchemaMappingMappedInputFields: entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#field_name EntityresolutionSchemaMapping#field_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#type EntityresolutionSchemaMapping#type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#group_name EntityresolutionSchemaMapping#group_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.hashed">hashed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#hashed EntityresolutionSchemaMapping#hashed}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.matchKey">matchKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#match_key EntityresolutionSchemaMapping#match_key}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.subType">subType</a></code> | <code>string</code> | The subtype of the Attribute. Would be required only when type is PROVIDER_ID. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#field_name EntityresolutionSchemaMapping#field_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#type EntityresolutionSchemaMapping#type}.

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#group_name EntityresolutionSchemaMapping#group_name}.

---

##### `hashed`<sup>Optional</sup> <a name="hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.hashed"></a>

```typescript
public readonly hashed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#hashed EntityresolutionSchemaMapping#hashed}.

---

##### `matchKey`<sup>Optional</sup> <a name="matchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.matchKey"></a>

```typescript
public readonly matchKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#match_key EntityresolutionSchemaMapping#match_key}.

---

##### `subType`<sup>Optional</sup> <a name="subType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.subType"></a>

```typescript
public readonly subType: string;
```

- *Type:* string

The subtype of the Attribute. Would be required only when type is PROVIDER_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#sub_type EntityresolutionSchemaMapping#sub_type}

---

### EntityresolutionSchemaMappingTags <a name="EntityresolutionSchemaMappingTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.Initializer"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

const entityresolutionSchemaMappingTags: entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#key EntityresolutionSchemaMapping#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_schema_mapping#value EntityresolutionSchemaMapping#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionSchemaMappingMappedInputFieldsList <a name="EntityresolutionSchemaMappingMappedInputFieldsList" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get"></a>

```typescript
public get(index: number): EntityresolutionSchemaMappingMappedInputFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionSchemaMappingMappedInputFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]

---


### EntityresolutionSchemaMappingMappedInputFieldsOutputReference <a name="EntityresolutionSchemaMappingMappedInputFieldsOutputReference" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetHashed">resetHashed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetMatchKey">resetMatchKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetSubType">resetSubType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetHashed` <a name="resetHashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetHashed"></a>

```typescript
public resetHashed(): void
```

##### `resetMatchKey` <a name="resetMatchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetMatchKey"></a>

```typescript
public resetMatchKey(): void
```

##### `resetSubType` <a name="resetSubType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetSubType"></a>

```typescript
public resetSubType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashedInput">hashedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKeyInput">matchKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subTypeInput">subTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed">hashed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey">matchKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType">subType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `hashedInput`<sup>Optional</sup> <a name="hashedInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashedInput"></a>

```typescript
public readonly hashedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchKeyInput`<sup>Optional</sup> <a name="matchKeyInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKeyInput"></a>

```typescript
public readonly matchKeyInput: string;
```

- *Type:* string

---

##### `subTypeInput`<sup>Optional</sup> <a name="subTypeInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subTypeInput"></a>

```typescript
public readonly subTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `hashed`<sup>Required</sup> <a name="hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed"></a>

```typescript
public readonly hashed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchKey`<sup>Required</sup> <a name="matchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey"></a>

```typescript
public readonly matchKey: string;
```

- *Type:* string

---

##### `subType`<sup>Required</sup> <a name="subType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType"></a>

```typescript
public readonly subType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionSchemaMappingMappedInputFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>

---


### EntityresolutionSchemaMappingTagsList <a name="EntityresolutionSchemaMappingTagsList" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get"></a>

```typescript
public get(index: number): EntityresolutionSchemaMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionSchemaMappingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]

---


### EntityresolutionSchemaMappingTagsOutputReference <a name="EntityresolutionSchemaMappingTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer"></a>

```typescript
import { entityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityresolutionSchemaMappingTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>

---



