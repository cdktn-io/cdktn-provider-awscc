# `opensearchmemorySpace` Submodule <a name="`opensearchmemorySpace` Submodule" id="@cdktn/provider-awscc.opensearchmemorySpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchmemorySpace <a name="OpensearchmemorySpace" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space awscc_opensearchmemory_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

new opensearchmemorySpace.OpensearchmemorySpace(scope: Construct, id: string, config: OpensearchmemorySpaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig">OpensearchmemorySpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig">OpensearchmemorySpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies">putMemoryStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays">resetEventExpiryDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId">resetExtractionModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays">resetMemoryExpiryDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies">resetMemoryStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: OpensearchmemorySpaceEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---

##### `putMemoryStrategies` <a name="putMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies"></a>

```typescript
public putMemoryStrategies(value: IResolvable | OpensearchmemorySpaceMemoryStrategies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags"></a>

```typescript
public putTags(value: IResolvable | OpensearchmemorySpaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetEventExpiryDays` <a name="resetEventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays"></a>

```typescript
public resetEventExpiryDays(): void
```

##### `resetExtractionModelId` <a name="resetExtractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId"></a>

```typescript
public resetExtractionModelId(): void
```

##### `resetMemoryExpiryDays` <a name="resetMemoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays"></a>

```typescript
public resetMemoryExpiryDays(): void
```

##### `resetMemoryStrategies` <a name="resetMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies"></a>

```typescript
public resetMemoryStrategies(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

opensearchmemorySpace.OpensearchmemorySpace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchmemorySpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchmemorySpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchmemorySpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies">memoryStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput">eventExpiryDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput">extractionModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput">memoryExpiryDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput">memoryStrategiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays">eventExpiryDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId">extractionModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays">memoryExpiryDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: OpensearchmemorySpaceEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memoryStrategies`<sup>Required</sup> <a name="memoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies"></a>

```typescript
public readonly memoryStrategies: OpensearchmemorySpaceMemoryStrategiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a>

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags"></a>

```typescript
public readonly tags: OpensearchmemorySpaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | OpensearchmemorySpaceEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---

##### `eventExpiryDaysInput`<sup>Optional</sup> <a name="eventExpiryDaysInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput"></a>

```typescript
public readonly eventExpiryDaysInput: number;
```

- *Type:* number

---

##### `extractionModelIdInput`<sup>Optional</sup> <a name="extractionModelIdInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput"></a>

```typescript
public readonly extractionModelIdInput: string;
```

- *Type:* string

---

##### `memoryExpiryDaysInput`<sup>Optional</sup> <a name="memoryExpiryDaysInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput"></a>

```typescript
public readonly memoryExpiryDaysInput: number;
```

- *Type:* number

---

##### `memoryStrategiesInput`<sup>Optional</sup> <a name="memoryStrategiesInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput"></a>

```typescript
public readonly memoryStrategiesInput: IResolvable | OpensearchmemorySpaceMemoryStrategies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OpensearchmemorySpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]

---

##### `eventExpiryDays`<sup>Required</sup> <a name="eventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays"></a>

```typescript
public readonly eventExpiryDays: number;
```

- *Type:* number

---

##### `extractionModelId`<sup>Required</sup> <a name="extractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId"></a>

```typescript
public readonly extractionModelId: string;
```

- *Type:* string

---

##### `memoryExpiryDays`<sup>Required</sup> <a name="memoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays"></a>

```typescript
public readonly memoryExpiryDays: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchmemorySpaceConfig <a name="OpensearchmemorySpaceConfig" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

const opensearchmemorySpaceConfig: opensearchmemorySpace.OpensearchmemorySpaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays">eventExpiryDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId">extractionModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays">memoryExpiryDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies">memoryStrategies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: OpensearchmemorySpaceEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}.

---

##### `eventExpiryDays`<sup>Optional</sup> <a name="eventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays"></a>

```typescript
public readonly eventExpiryDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}.

---

##### `extractionModelId`<sup>Optional</sup> <a name="extractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId"></a>

```typescript
public readonly extractionModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}.

---

##### `memoryExpiryDays`<sup>Optional</sup> <a name="memoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays"></a>

```typescript
public readonly memoryExpiryDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}.

---

##### `memoryStrategies`<sup>Optional</sup> <a name="memoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies"></a>

```typescript
public readonly memoryStrategies: IResolvable | OpensearchmemorySpaceMemoryStrategies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OpensearchmemorySpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#tags OpensearchmemorySpace#tags}

---

### OpensearchmemorySpaceEncryptionConfiguration <a name="OpensearchmemorySpaceEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

const opensearchmemorySpaceEncryptionConfiguration: opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}.

---

### OpensearchmemorySpaceMemoryStrategies <a name="OpensearchmemorySpaceMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

const opensearchmemorySpaceMemoryStrategies: opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration"></a>

```typescript
public readonly configuration: OpensearchmemorySpaceMemoryStrategiesConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}.

---

### OpensearchmemorySpaceMemoryStrategiesConfiguration <a name="OpensearchmemorySpaceMemoryStrategiesConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

const opensearchmemorySpaceMemoryStrategiesConfiguration: opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled">consolidationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages">extractEveryNMessages</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens">extractEveryNTokens</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt">extractionPrompt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN">extractionSeedRecentN</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK">extractionSeedTopK</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds">idleTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}. |

---

##### `consolidationEnabled`<sup>Optional</sup> <a name="consolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled"></a>

```typescript
public readonly consolidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}.

---

##### `extractEveryNMessages`<sup>Optional</sup> <a name="extractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages"></a>

```typescript
public readonly extractEveryNMessages: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}.

---

##### `extractEveryNTokens`<sup>Optional</sup> <a name="extractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens"></a>

```typescript
public readonly extractEveryNTokens: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}.

---

##### `extractionPrompt`<sup>Optional</sup> <a name="extractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt"></a>

```typescript
public readonly extractionPrompt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}.

---

##### `extractionSeedRecentN`<sup>Optional</sup> <a name="extractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN"></a>

```typescript
public readonly extractionSeedRecentN: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}.

---

##### `extractionSeedTopK`<sup>Optional</sup> <a name="extractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK"></a>

```typescript
public readonly extractionSeedTopK: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}.

---

##### `idleTimeoutSeconds`<sup>Optional</sup> <a name="idleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds"></a>

```typescript
public readonly idleTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}.

---

### OpensearchmemorySpaceTags <a name="OpensearchmemorySpaceTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

const opensearchmemorySpaceTags: opensearchmemorySpace.OpensearchmemorySpaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#key OpensearchmemorySpace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#value OpensearchmemorySpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchmemorySpaceEncryptionConfigurationOutputReference <a name="OpensearchmemorySpaceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

new opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchmemorySpaceEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---


### OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

new opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled">resetConsolidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages">resetExtractEveryNMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens">resetExtractEveryNTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt">resetExtractionPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN">resetExtractionSeedRecentN</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK">resetExtractionSeedTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds">resetIdleTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsolidationEnabled` <a name="resetConsolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled"></a>

```typescript
public resetConsolidationEnabled(): void
```

##### `resetExtractEveryNMessages` <a name="resetExtractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages"></a>

```typescript
public resetExtractEveryNMessages(): void
```

##### `resetExtractEveryNTokens` <a name="resetExtractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens"></a>

```typescript
public resetExtractEveryNTokens(): void
```

##### `resetExtractionPrompt` <a name="resetExtractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt"></a>

```typescript
public resetExtractionPrompt(): void
```

##### `resetExtractionSeedRecentN` <a name="resetExtractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN"></a>

```typescript
public resetExtractionSeedRecentN(): void
```

##### `resetExtractionSeedTopK` <a name="resetExtractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK"></a>

```typescript
public resetExtractionSeedTopK(): void
```

##### `resetIdleTimeoutSeconds` <a name="resetIdleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds"></a>

```typescript
public resetIdleTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput">consolidationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput">extractEveryNMessagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput">extractEveryNTokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput">extractionPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput">extractionSeedRecentNInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput">extractionSeedTopKInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput">idleTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled">consolidationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages">extractEveryNMessages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens">extractEveryNTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt">extractionPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN">extractionSeedRecentN</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK">extractionSeedTopK</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds">idleTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consolidationEnabledInput`<sup>Optional</sup> <a name="consolidationEnabledInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput"></a>

```typescript
public readonly consolidationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `extractEveryNMessagesInput`<sup>Optional</sup> <a name="extractEveryNMessagesInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput"></a>

```typescript
public readonly extractEveryNMessagesInput: number;
```

- *Type:* number

---

##### `extractEveryNTokensInput`<sup>Optional</sup> <a name="extractEveryNTokensInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput"></a>

```typescript
public readonly extractEveryNTokensInput: number;
```

- *Type:* number

---

##### `extractionPromptInput`<sup>Optional</sup> <a name="extractionPromptInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput"></a>

```typescript
public readonly extractionPromptInput: string;
```

- *Type:* string

---

##### `extractionSeedRecentNInput`<sup>Optional</sup> <a name="extractionSeedRecentNInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput"></a>

```typescript
public readonly extractionSeedRecentNInput: number;
```

- *Type:* number

---

##### `extractionSeedTopKInput`<sup>Optional</sup> <a name="extractionSeedTopKInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput"></a>

```typescript
public readonly extractionSeedTopKInput: number;
```

- *Type:* number

---

##### `idleTimeoutSecondsInput`<sup>Optional</sup> <a name="idleTimeoutSecondsInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput"></a>

```typescript
public readonly idleTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `consolidationEnabled`<sup>Required</sup> <a name="consolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled"></a>

```typescript
public readonly consolidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `extractEveryNMessages`<sup>Required</sup> <a name="extractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages"></a>

```typescript
public readonly extractEveryNMessages: number;
```

- *Type:* number

---

##### `extractEveryNTokens`<sup>Required</sup> <a name="extractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens"></a>

```typescript
public readonly extractEveryNTokens: number;
```

- *Type:* number

---

##### `extractionPrompt`<sup>Required</sup> <a name="extractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt"></a>

```typescript
public readonly extractionPrompt: string;
```

- *Type:* string

---

##### `extractionSeedRecentN`<sup>Required</sup> <a name="extractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN"></a>

```typescript
public readonly extractionSeedRecentN: number;
```

- *Type:* number

---

##### `extractionSeedTopK`<sup>Required</sup> <a name="extractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK"></a>

```typescript
public readonly extractionSeedTopK: number;
```

- *Type:* number

---

##### `idleTimeoutSeconds`<sup>Required</sup> <a name="idleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds"></a>

```typescript
public readonly idleTimeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchmemorySpaceMemoryStrategiesConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---


### OpensearchmemorySpaceMemoryStrategiesList <a name="OpensearchmemorySpaceMemoryStrategiesList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

new opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get"></a>

```typescript
public get(index: number): OpensearchmemorySpaceMemoryStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchmemorySpaceMemoryStrategies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]

---


### OpensearchmemorySpaceMemoryStrategiesOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

new opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration"></a>

```typescript
public putConfiguration(value: OpensearchmemorySpaceMemoryStrategiesConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration"></a>

```typescript
public readonly configuration: OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | OpensearchmemorySpaceMemoryStrategiesConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchmemorySpaceMemoryStrategies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>

---


### OpensearchmemorySpaceTagsList <a name="OpensearchmemorySpaceTagsList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

new opensearchmemorySpace.OpensearchmemorySpaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get"></a>

```typescript
public get(index: number): OpensearchmemorySpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchmemorySpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]

---


### OpensearchmemorySpaceTagsOutputReference <a name="OpensearchmemorySpaceTagsOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer"></a>

```typescript
import { opensearchmemorySpace } from '@cdktn/provider-awscc'

new opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchmemorySpaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>

---



