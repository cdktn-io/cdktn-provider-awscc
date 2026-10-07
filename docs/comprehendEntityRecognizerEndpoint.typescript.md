# `comprehendEntityRecognizerEndpoint` Submodule <a name="`comprehendEntityRecognizerEndpoint` Submodule" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendEntityRecognizerEndpoint <a name="ComprehendEntityRecognizerEndpoint" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint awscc_comprehend_entity_recognizer_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

new comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint(scope: Construct, id: string, config: ComprehendEntityRecognizerEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig">ComprehendEntityRecognizerEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig">ComprehendEntityRecognizerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetDataAccessRoleArn">resetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetFlywheelArn">resetFlywheelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetModelArn">resetModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | ComprehendEntityRecognizerEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]

---

##### `resetDataAccessRoleArn` <a name="resetDataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetDataAccessRoleArn"></a>

```typescript
public resetDataAccessRoleArn(): void
```

##### `resetFlywheelArn` <a name="resetFlywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetFlywheelArn"></a>

```typescript
public resetFlywheelArn(): void
```

##### `resetModelArn` <a name="resetModelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetModelArn"></a>

```typescript
public resetModelArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComprehendEntityRecognizerEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComprehendEntityRecognizerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendEntityRecognizerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.currentInferenceUnits">currentInferenceUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointStatus">endpointStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList">ComprehendEntityRecognizerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnitsInput">desiredInferenceUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArnInput">flywheelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArnInput">modelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArn">flywheelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `currentInferenceUnits`<sup>Required</sup> <a name="currentInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.currentInferenceUnits"></a>

```typescript
public readonly currentInferenceUnits: number;
```

- *Type:* number

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointStatus"></a>

```typescript
public readonly endpointStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tags"></a>

```typescript
public readonly tags: ComprehendEntityRecognizerEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList">ComprehendEntityRecognizerEndpointTagsList</a>

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArnInput"></a>

```typescript
public readonly dataAccessRoleArnInput: string;
```

- *Type:* string

---

##### `desiredInferenceUnitsInput`<sup>Optional</sup> <a name="desiredInferenceUnitsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnitsInput"></a>

```typescript
public readonly desiredInferenceUnitsInput: number;
```

- *Type:* number

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `flywheelArnInput`<sup>Optional</sup> <a name="flywheelArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArnInput"></a>

```typescript
public readonly flywheelArnInput: string;
```

- *Type:* string

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArnInput"></a>

```typescript
public readonly modelArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ComprehendEntityRecognizerEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits"></a>

```typescript
public readonly desiredInferenceUnits: number;
```

- *Type:* number

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `flywheelArn`<sup>Required</sup> <a name="flywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArn"></a>

```typescript
public readonly flywheelArn: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendEntityRecognizerEndpointConfig <a name="ComprehendEntityRecognizerEndpointConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.Initializer"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

const comprehendEntityRecognizerEndpointConfig: comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>number</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.endpointName">endpointName</a></code> | <code>string</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.flywheelArn">flywheelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.modelArn">modelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]</code> | Tags associated with the endpoint being created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.desiredInferenceUnits"></a>

```typescript
public readonly desiredInferenceUnits: number;
```

- *Type:* number

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#desired_inference_units ComprehendEntityRecognizerEndpoint#desired_inference_units}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#endpoint_name ComprehendEntityRecognizerEndpoint#endpoint_name}

---

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#data_access_role_arn ComprehendEntityRecognizerEndpoint#data_access_role_arn}

---

##### `flywheelArn`<sup>Optional</sup> <a name="flywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.flywheelArn"></a>

```typescript
public readonly flywheelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#flywheel_arn ComprehendEntityRecognizerEndpoint#flywheel_arn}

---

##### `modelArn`<sup>Optional</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#model_arn ComprehendEntityRecognizerEndpoint#model_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ComprehendEntityRecognizerEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#tags ComprehendEntityRecognizerEndpoint#tags}

---

### ComprehendEntityRecognizerEndpointTags <a name="ComprehendEntityRecognizerEndpointTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.Initializer"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

const comprehendEntityRecognizerEndpointTags: comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.key">key</a></code> | <code>string</code> | The initial part of a key-value pair that forms a tag associated with a given resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.value">value</a></code> | <code>string</code> | The second part of a key-value pair that forms a tag associated with a given resource. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The initial part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#key ComprehendEntityRecognizerEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The second part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#value ComprehendEntityRecognizerEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendEntityRecognizerEndpointTagsList <a name="ComprehendEntityRecognizerEndpointTagsList" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

new comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get"></a>

```typescript
public get(index: number): ComprehendEntityRecognizerEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendEntityRecognizerEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]

---


### ComprehendEntityRecognizerEndpointTagsOutputReference <a name="ComprehendEntityRecognizerEndpointTagsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer"></a>

```typescript
import { comprehendEntityRecognizerEndpoint } from '@cdktn/provider-awscc'

new comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendEntityRecognizerEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>

---



