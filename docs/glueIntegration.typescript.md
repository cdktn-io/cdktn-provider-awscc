# `glueIntegration` Submodule <a name="`glueIntegration` Submodule" id="@cdktn/provider-awscc.glueIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegration <a name="GlueIntegration" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration awscc_glue_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

new glueIntegration.GlueIntegration(scope: Construct, id: string, config: GlueIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig">GlueIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig">GlueIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig">putIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDataFilter">resetDataFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetIntegrationConfig">resetIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIntegrationConfig` <a name="putIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig"></a>

```typescript
public putIntegrationConfig(value: GlueIntegrationIntegrationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags"></a>

```typescript
public putTags(value: IResolvable | GlueIntegrationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>[]

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetAdditionalEncryptionContext"></a>

```typescript
public resetAdditionalEncryptionContext(): void
```

##### `resetDataFilter` <a name="resetDataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDataFilter"></a>

```typescript
public resetDataFilter(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIntegrationConfig` <a name="resetIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetIntegrationConfig"></a>

```typescript
public resetIntegrationConfig(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

glueIntegration.GlueIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

glueIntegration.GlueIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

glueIntegration.GlueIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

glueIntegration.GlueIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationArn">integrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfig">integrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference">GlueIntegrationIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList">GlueIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilterInput">dataFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfigInput">integrationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationNameInput">integrationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArnInput">sourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArnInput">targetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilter">dataFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationName">integrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationArn`<sup>Required</sup> <a name="integrationArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationArn"></a>

```typescript
public readonly integrationArn: string;
```

- *Type:* string

---

##### `integrationConfig`<sup>Required</sup> <a name="integrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfig"></a>

```typescript
public readonly integrationConfig: GlueIntegrationIntegrationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference">GlueIntegrationIntegrationConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tags"></a>

```typescript
public readonly tags: GlueIntegrationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList">GlueIntegrationTagsList</a>

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContextInput"></a>

```typescript
public readonly additionalEncryptionContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataFilterInput`<sup>Optional</sup> <a name="dataFilterInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilterInput"></a>

```typescript
public readonly dataFilterInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `integrationConfigInput`<sup>Optional</sup> <a name="integrationConfigInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfigInput"></a>

```typescript
public readonly integrationConfigInput: IResolvable | GlueIntegrationIntegrationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---

##### `integrationNameInput`<sup>Optional</sup> <a name="integrationNameInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationNameInput"></a>

```typescript
public readonly integrationNameInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArnInput"></a>

```typescript
public readonly sourceArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GlueIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>[]

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArnInput"></a>

```typescript
public readonly targetArnInput: string;
```

- *Type:* string

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataFilter`<sup>Required</sup> <a name="dataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilter"></a>

```typescript
public readonly dataFilter: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationConfig <a name="GlueIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.Initializer"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

const glueIntegrationConfig: glueIntegration.GlueIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationName">integrationName</a></code> | <code>string</code> | The name of the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.sourceArn">sourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the database to use as the source for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.targetArn">targetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | An optional set of non-secret key value pairs that contains additional contextual information about the data. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dataFilter">dataFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#description GlueIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationConfig">integrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | The configuration settings for the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | An KMS key identifier for the key to use to encrypt the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#integration_name GlueIntegration#integration_name}

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the database to use as the source for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#source_arn GlueIntegration#source_arn}

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#target_arn GlueIntegration#target_arn}

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An optional set of non-secret key value pairs that contains additional contextual information about the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#additional_encryption_context GlueIntegration#additional_encryption_context}

---

##### `dataFilter`<sup>Optional</sup> <a name="dataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dataFilter"></a>

```typescript
public readonly dataFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#description GlueIntegration#description}.

---

##### `integrationConfig`<sup>Optional</sup> <a name="integrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationConfig"></a>

```typescript
public readonly integrationConfig: GlueIntegrationIntegrationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

The configuration settings for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#integration_config GlueIntegration#integration_config}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

An KMS key identifier for the key to use to encrypt the integration.

If you don't specify an encryption key, the default AWS owned KMS key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#kms_key_id GlueIntegration#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GlueIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#tags GlueIntegration#tags}

---

### GlueIntegrationIntegrationConfig <a name="GlueIntegrationIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.Initializer"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

const glueIntegrationIntegrationConfig: glueIntegration.GlueIntegrationIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.continuousSync">continuousSync</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables continuous synchronization for on-demand data extractions. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.sourceProperties">sourceProperties</a></code> | <code>{[ key: string ]: string}</code> | A collection of key-value pairs that specify additional properties for the integration source. |

---

##### `continuousSync`<sup>Optional</sup> <a name="continuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.continuousSync"></a>

```typescript
public readonly continuousSync: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables continuous synchronization for on-demand data extractions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#continuous_sync GlueIntegration#continuous_sync}

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#refresh_interval GlueIntegration#refresh_interval}

---

##### `sourceProperties`<sup>Optional</sup> <a name="sourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.sourceProperties"></a>

```typescript
public readonly sourceProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A collection of key-value pairs that specify additional properties for the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#source_properties GlueIntegration#source_properties}

---

### GlueIntegrationTags <a name="GlueIntegrationTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.Initializer"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

const glueIntegrationTags: glueIntegration.GlueIntegrationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#key GlueIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#value GlueIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationIntegrationConfigOutputReference <a name="GlueIntegrationIntegrationConfigOutputReference" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

new glueIntegration.GlueIntegrationIntegrationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetContinuousSync">resetContinuousSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetRefreshInterval">resetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetSourceProperties">resetSourceProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinuousSync` <a name="resetContinuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetContinuousSync"></a>

```typescript
public resetContinuousSync(): void
```

##### `resetRefreshInterval` <a name="resetRefreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetRefreshInterval"></a>

```typescript
public resetRefreshInterval(): void
```

##### `resetSourceProperties` <a name="resetSourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetSourceProperties"></a>

```typescript
public resetSourceProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSyncInput">continuousSyncInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourcePropertiesInput">sourcePropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSync">continuousSync</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourceProperties">sourceProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuousSyncInput`<sup>Optional</sup> <a name="continuousSyncInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSyncInput"></a>

```typescript
public readonly continuousSyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshIntervalInput"></a>

```typescript
public readonly refreshIntervalInput: string;
```

- *Type:* string

---

##### `sourcePropertiesInput`<sup>Optional</sup> <a name="sourcePropertiesInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourcePropertiesInput"></a>

```typescript
public readonly sourcePropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `continuousSync`<sup>Required</sup> <a name="continuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSync"></a>

```typescript
public readonly continuousSync: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

---

##### `sourceProperties`<sup>Required</sup> <a name="sourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourceProperties"></a>

```typescript
public readonly sourceProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueIntegrationIntegrationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---


### GlueIntegrationTagsList <a name="GlueIntegrationTagsList" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

new glueIntegration.GlueIntegrationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get"></a>

```typescript
public get(index: number): GlueIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>[]

---


### GlueIntegrationTagsOutputReference <a name="GlueIntegrationTagsOutputReference" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer"></a>

```typescript
import { glueIntegration } from '@cdktn/provider-awscc'

new glueIntegration.GlueIntegrationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueIntegrationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>

---



