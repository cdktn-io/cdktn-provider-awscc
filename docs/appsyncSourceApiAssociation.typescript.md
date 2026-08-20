# `appsyncSourceApiAssociation` Submodule <a name="`appsyncSourceApiAssociation` Submodule" id="@cdktn/provider-awscc.appsyncSourceApiAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncSourceApiAssociation <a name="AppsyncSourceApiAssociation" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association awscc_appsync_source_api_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktn/provider-awscc'

new appsyncSourceApiAssociation.AppsyncSourceApiAssociation(scope: Construct, id: string, config?: AppsyncSourceApiAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig">AppsyncSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig">AppsyncSourceApiAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig">putSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiIdentifier">resetMergedApiIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiAssociationConfig">resetSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiIdentifier">resetSourceApiIdentifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceApiAssociationConfig` <a name="putSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig"></a>

```typescript
public putSourceApiAssociationConfig(value: AppsyncSourceApiAssociationSourceApiAssociationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMergedApiIdentifier` <a name="resetMergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiIdentifier"></a>

```typescript
public resetMergedApiIdentifier(): void
```

##### `resetSourceApiAssociationConfig` <a name="resetSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiAssociationConfig"></a>

```typescript
public resetSourceApiAssociationConfig(): void
```

##### `resetSourceApiIdentifier` <a name="resetSourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiIdentifier"></a>

```typescript
public resetSourceApiIdentifier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktn/provider-awscc'

appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktn/provider-awscc'

appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktn/provider-awscc'

appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktn/provider-awscc'

appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncSourceApiAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncSourceApiAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncSourceApiAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationArn">associationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lastSuccessfulMergeDate">lastSuccessfulMergeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArn">mergedApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiId">mergedApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArn">sourceApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfig">sourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatus">sourceApiAssociationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail">sourceApiAssociationStatusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiId">sourceApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifierInput">mergedApiIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfigInput">sourceApiAssociationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifierInput">sourceApiIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifier">mergedApiIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifier">sourceApiIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associationArn`<sup>Required</sup> <a name="associationArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationArn"></a>

```typescript
public readonly associationArn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastSuccessfulMergeDate`<sup>Required</sup> <a name="lastSuccessfulMergeDate" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lastSuccessfulMergeDate"></a>

```typescript
public readonly lastSuccessfulMergeDate: string;
```

- *Type:* string

---

##### `mergedApiArn`<sup>Required</sup> <a name="mergedApiArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArn"></a>

```typescript
public readonly mergedApiArn: string;
```

- *Type:* string

---

##### `mergedApiId`<sup>Required</sup> <a name="mergedApiId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiId"></a>

```typescript
public readonly mergedApiId: string;
```

- *Type:* string

---

##### `sourceApiArn`<sup>Required</sup> <a name="sourceApiArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArn"></a>

```typescript
public readonly sourceApiArn: string;
```

- *Type:* string

---

##### `sourceApiAssociationConfig`<sup>Required</sup> <a name="sourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfig"></a>

```typescript
public readonly sourceApiAssociationConfig: AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a>

---

##### `sourceApiAssociationStatus`<sup>Required</sup> <a name="sourceApiAssociationStatus" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatus"></a>

```typescript
public readonly sourceApiAssociationStatus: string;
```

- *Type:* string

---

##### `sourceApiAssociationStatusDetail`<sup>Required</sup> <a name="sourceApiAssociationStatusDetail" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail"></a>

```typescript
public readonly sourceApiAssociationStatusDetail: string;
```

- *Type:* string

---

##### `sourceApiId`<sup>Required</sup> <a name="sourceApiId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiId"></a>

```typescript
public readonly sourceApiId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `mergedApiIdentifierInput`<sup>Optional</sup> <a name="mergedApiIdentifierInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifierInput"></a>

```typescript
public readonly mergedApiIdentifierInput: string;
```

- *Type:* string

---

##### `sourceApiAssociationConfigInput`<sup>Optional</sup> <a name="sourceApiAssociationConfigInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfigInput"></a>

```typescript
public readonly sourceApiAssociationConfigInput: IResolvable | AppsyncSourceApiAssociationSourceApiAssociationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---

##### `sourceApiIdentifierInput`<sup>Optional</sup> <a name="sourceApiIdentifierInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifierInput"></a>

```typescript
public readonly sourceApiIdentifierInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `mergedApiIdentifier`<sup>Required</sup> <a name="mergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifier"></a>

```typescript
public readonly mergedApiIdentifier: string;
```

- *Type:* string

---

##### `sourceApiIdentifier`<sup>Required</sup> <a name="sourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifier"></a>

```typescript
public readonly sourceApiIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncSourceApiAssociationConfig <a name="AppsyncSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktn/provider-awscc'

const appsyncSourceApiAssociationConfig: appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.description">description</a></code> | <code>string</code> | Description of the SourceApiAssociation. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiIdentifier">mergedApiIdentifier</a></code> | <code>string</code> | Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiAssociationConfig">sourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | Customized configuration for SourceApiAssociation. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiIdentifier">sourceApiIdentifier</a></code> | <code>string</code> | Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the SourceApiAssociation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#description AppsyncSourceApiAssociation#description}

---

##### `mergedApiIdentifier`<sup>Optional</sup> <a name="mergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiIdentifier"></a>

```typescript
public readonly mergedApiIdentifier: string;
```

- *Type:* string

Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#merged_api_identifier AppsyncSourceApiAssociation#merged_api_identifier}

---

##### `sourceApiAssociationConfig`<sup>Optional</sup> <a name="sourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiAssociationConfig"></a>

```typescript
public readonly sourceApiAssociationConfig: AppsyncSourceApiAssociationSourceApiAssociationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

Customized configuration for SourceApiAssociation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#source_api_association_config AppsyncSourceApiAssociation#source_api_association_config}

---

##### `sourceApiIdentifier`<sup>Optional</sup> <a name="sourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiIdentifier"></a>

```typescript
public readonly sourceApiIdentifier: string;
```

- *Type:* string

Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#source_api_identifier AppsyncSourceApiAssociation#source_api_identifier}

---

### AppsyncSourceApiAssociationSourceApiAssociationConfig <a name="AppsyncSourceApiAssociationSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktn/provider-awscc'

const appsyncSourceApiAssociationSourceApiAssociationConfig: appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.property.mergeType">mergeType</a></code> | <code>string</code> | Configuration of the merged behavior for the association. |

---

##### `mergeType`<sup>Optional</sup> <a name="mergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

Configuration of the merged behavior for the association.

For example when it could be auto or has to be manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#merge_type AppsyncSourceApiAssociation#merge_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference <a name="AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktn/provider-awscc'

new appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resetMergeType">resetMergeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMergeType` <a name="resetMergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resetMergeType"></a>

```typescript
public resetMergeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeTypeInput">mergeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType">mergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mergeTypeInput`<sup>Optional</sup> <a name="mergeTypeInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeTypeInput"></a>

```typescript
public readonly mergeTypeInput: string;
```

- *Type:* string

---

##### `mergeType`<sup>Required</sup> <a name="mergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncSourceApiAssociationSourceApiAssociationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---



