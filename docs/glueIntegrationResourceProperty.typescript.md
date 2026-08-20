# `glueIntegrationResourceProperty` Submodule <a name="`glueIntegrationResourceProperty` Submodule" id="@cdktn/provider-awscc.glueIntegrationResourceProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegrationResourceProperty <a name="GlueIntegrationResourceProperty" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property awscc_glue_integration_resource_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new glueIntegrationResourceProperty.GlueIntegrationResourceProperty(scope: Construct, id: string, config: GlueIntegrationResourcePropertyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig">GlueIntegrationResourcePropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig">GlueIntegrationResourcePropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties">putSourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties">putTargetProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties">resetSourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties">resetTargetProcessingProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceProcessingProperties` <a name="putSourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties"></a>

```typescript
public putSourceProcessingProperties(value: GlueIntegrationResourcePropertySourceProcessingProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags"></a>

```typescript
public putTags(value: IResolvable | GlueIntegrationResourcePropertyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]

---

##### `putTargetProcessingProperties` <a name="putTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties"></a>

```typescript
public putTargetProcessingProperties(value: GlueIntegrationResourcePropertyTargetProcessingProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---

##### `resetSourceProcessingProperties` <a name="resetSourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties"></a>

```typescript
public resetSourceProcessingProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetProcessingProperties` <a name="resetTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties"></a>

```typescript
public resetTargetProcessingProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueIntegrationResourceProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueIntegrationResourceProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegrationResourceProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn">resourcePropertyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties">sourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties">targetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput">sourceProcessingPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput">targetProcessingPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourcePropertyArn`<sup>Required</sup> <a name="resourcePropertyArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn"></a>

```typescript
public readonly resourcePropertyArn: string;
```

- *Type:* string

---

##### `sourceProcessingProperties`<sup>Required</sup> <a name="sourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties"></a>

```typescript
public readonly sourceProcessingProperties: GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags"></a>

```typescript
public readonly tags: GlueIntegrationResourcePropertyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a>

---

##### `targetProcessingProperties`<sup>Required</sup> <a name="targetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties"></a>

```typescript
public readonly targetProcessingProperties: GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a>

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `sourceProcessingPropertiesInput`<sup>Optional</sup> <a name="sourceProcessingPropertiesInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput"></a>

```typescript
public readonly sourceProcessingPropertiesInput: IResolvable | GlueIntegrationResourcePropertySourceProcessingProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GlueIntegrationResourcePropertyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]

---

##### `targetProcessingPropertiesInput`<sup>Optional</sup> <a name="targetProcessingPropertiesInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput"></a>

```typescript
public readonly targetProcessingPropertiesInput: IResolvable | GlueIntegrationResourcePropertyTargetProcessingProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationResourcePropertyConfig <a name="GlueIntegrationResourcePropertyConfig" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

const glueIntegrationResourcePropertyConfig: glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | The connection ARN of the source, or the database ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties">sourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | The resource properties associated with the integration source. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties">targetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | The resource properties associated with the integration target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The connection ARN of the source, or the database ARN of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#resource_arn GlueIntegrationResourceProperty#resource_arn}

---

##### `sourceProcessingProperties`<sup>Optional</sup> <a name="sourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties"></a>

```typescript
public readonly sourceProcessingProperties: GlueIntegrationResourcePropertySourceProcessingProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

The resource properties associated with the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#source_processing_properties GlueIntegrationResourceProperty#source_processing_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GlueIntegrationResourcePropertyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#tags GlueIntegrationResourceProperty#tags}

---

##### `targetProcessingProperties`<sup>Optional</sup> <a name="targetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties"></a>

```typescript
public readonly targetProcessingProperties: GlueIntegrationResourcePropertyTargetProcessingProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

The resource properties associated with the integration target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#target_processing_properties GlueIntegrationResourceProperty#target_processing_properties}

---

### GlueIntegrationResourcePropertySourceProcessingProperties <a name="GlueIntegrationResourcePropertySourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

const glueIntegrationResourcePropertySourceProcessingProperties: glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn">roleArn</a></code> | <code>string</code> | The IAM role to access the Glue connection. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The IAM role to access the Glue connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

### GlueIntegrationResourcePropertyTags <a name="GlueIntegrationResourcePropertyTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

const glueIntegrationResourcePropertyTags: glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#key GlueIntegrationResourceProperty#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#value GlueIntegrationResourceProperty#value}

---

### GlueIntegrationResourcePropertyTargetProcessingProperties <a name="GlueIntegrationResourcePropertyTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

const glueIntegrationResourcePropertyTargetProcessingProperties: glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName">connectionName</a></code> | <code>string</code> | The Glue network connection to configure the Glue job running in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | The ARN of an Eventbridge event bus to receive the integration status notification. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn">kmsArn</a></code> | <code>string</code> | The ARN of the KMS key used for encryption. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn">roleArn</a></code> | <code>string</code> | The IAM role to access the Glue database. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The Glue network connection to configure the Glue job running in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#connection_name GlueIntegrationResourceProperty#connection_name}

---

##### `eventBusArn`<sup>Optional</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

The ARN of an Eventbridge event bus to receive the integration status notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#event_bus_arn GlueIntegrationResourceProperty#event_bus_arn}

---

##### `kmsArn`<sup>Optional</sup> <a name="kmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn"></a>

```typescript
public readonly kmsArn: string;
```

- *Type:* string

The ARN of the KMS key used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#kms_arn GlueIntegrationResourceProperty#kms_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The IAM role to access the Glue database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueIntegrationResourcePropertySourceProcessingProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---


### GlueIntegrationResourcePropertyTagsList <a name="GlueIntegrationResourcePropertyTagsList" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get"></a>

```typescript
public get(index: number): GlueIntegrationResourcePropertyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueIntegrationResourcePropertyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]

---


### GlueIntegrationResourcePropertyTagsOutputReference <a name="GlueIntegrationResourcePropertyTagsOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueIntegrationResourcePropertyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>

---


### GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer"></a>

```typescript
import { glueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn">resetEventBusArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn">resetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```

##### `resetEventBusArn` <a name="resetEventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn"></a>

```typescript
public resetEventBusArn(): void
```

##### `resetKmsArn` <a name="resetKmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn"></a>

```typescript
public resetKmsArn(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput">eventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput">kmsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn">kmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput"></a>

```typescript
public readonly eventBusArnInput: string;
```

- *Type:* string

---

##### `kmsArnInput`<sup>Optional</sup> <a name="kmsArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput"></a>

```typescript
public readonly kmsArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

---

##### `kmsArn`<sup>Required</sup> <a name="kmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn"></a>

```typescript
public readonly kmsArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueIntegrationResourcePropertyTargetProcessingProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---



