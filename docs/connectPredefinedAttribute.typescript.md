# `connectPredefinedAttribute` Submodule <a name="`connectPredefinedAttribute` Submodule" id="@cdktn/provider-awscc.connectPredefinedAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPredefinedAttribute <a name="ConnectPredefinedAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute awscc_connect_predefined_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

new connectPredefinedAttribute.ConnectPredefinedAttribute(scope: Construct, id: string, config: ConnectPredefinedAttributeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig">ConnectPredefinedAttributeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig">ConnectPredefinedAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration">putAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration">resetAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes">resetPurposes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues">resetValues</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributeConfiguration` <a name="putAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration"></a>

```typescript
public putAttributeConfiguration(value: ConnectPredefinedAttributeAttributeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---

##### `putValues` <a name="putValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues"></a>

```typescript
public putValues(value: ConnectPredefinedAttributeValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---

##### `resetAttributeConfiguration` <a name="resetAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration"></a>

```typescript
public resetAttributeConfiguration(): void
```

##### `resetPurposes` <a name="resetPurposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes"></a>

```typescript
public resetPurposes(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues"></a>

```typescript
public resetValues(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectPredefinedAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectPredefinedAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectPredefinedAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration">attributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput">attributeConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput">purposesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput">valuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes">purposes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attributeConfiguration`<sup>Required</sup> <a name="attributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration"></a>

```typescript
public readonly attributeConfiguration: ConnectPredefinedAttributeAttributeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion"></a>

```typescript
public readonly lastModifiedRegion: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values"></a>

```typescript
public readonly values: ConnectPredefinedAttributeValuesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a>

---

##### `attributeConfigurationInput`<sup>Optional</sup> <a name="attributeConfigurationInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput"></a>

```typescript
public readonly attributeConfigurationInput: IResolvable | ConnectPredefinedAttributeAttributeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `purposesInput`<sup>Optional</sup> <a name="purposesInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput"></a>

```typescript
public readonly purposesInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput"></a>

```typescript
public readonly valuesInput: IResolvable | ConnectPredefinedAttributeValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `purposes`<sup>Required</sup> <a name="purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes"></a>

```typescript
public readonly purposes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPredefinedAttributeAttributeConfiguration <a name="ConnectPredefinedAttributeAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.Initializer"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

const connectPredefinedAttributeAttributeConfiguration: connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation">enableValueValidationOnAssociation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables customers to enforce strict validation on the specific values that this predefined attribute can hold. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly">isReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allows the predefined attribute to show up and be managed in the Amazon Connect UI. |

---

##### `enableValueValidationOnAssociation`<sup>Optional</sup> <a name="enableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation"></a>

```typescript
public readonly enableValueValidationOnAssociation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables customers to enforce strict validation on the specific values that this predefined attribute can hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#enable_value_validation_on_association ConnectPredefinedAttribute#enable_value_validation_on_association}

---

##### `isReadOnly`<sup>Optional</sup> <a name="isReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly"></a>

```typescript
public readonly isReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allows the predefined attribute to show up and be managed in the Amazon Connect UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#is_read_only ConnectPredefinedAttribute#is_read_only}

---

### ConnectPredefinedAttributeConfig <a name="ConnectPredefinedAttributeConfig" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.Initializer"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

const connectPredefinedAttributeConfig: connectPredefinedAttribute.ConnectPredefinedAttributeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name">name</a></code> | <code>string</code> | The name of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration">attributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes">purposes</a></code> | <code>string[]</code> | The assigned purposes of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | The values of a predefined attribute. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#instance_arn ConnectPredefinedAttribute#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#name ConnectPredefinedAttribute#name}

---

##### `attributeConfiguration`<sup>Optional</sup> <a name="attributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration"></a>

```typescript
public readonly attributeConfiguration: ConnectPredefinedAttributeAttributeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#attribute_configuration ConnectPredefinedAttribute#attribute_configuration}

---

##### `purposes`<sup>Optional</sup> <a name="purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes"></a>

```typescript
public readonly purposes: string[];
```

- *Type:* string[]

The assigned purposes of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#purposes ConnectPredefinedAttribute#purposes}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values"></a>

```typescript
public readonly values: ConnectPredefinedAttributeValues;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

The values of a predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#values ConnectPredefinedAttribute#values}

---

### ConnectPredefinedAttributeValues <a name="ConnectPredefinedAttributeValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.Initializer"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

const connectPredefinedAttributeValues: connectPredefinedAttribute.ConnectPredefinedAttributeValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList">stringList</a></code> | <code>string[]</code> | Predefined attribute values of type string list. |

---

##### `stringList`<sup>Optional</sup> <a name="stringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList"></a>

```typescript
public readonly stringList: string[];
```

- *Type:* string[]

Predefined attribute values of type string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#string_list ConnectPredefinedAttribute#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectPredefinedAttributeAttributeConfigurationOutputReference <a name="ConnectPredefinedAttributeAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

new connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation">resetEnableValueValidationOnAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly">resetIsReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableValueValidationOnAssociation` <a name="resetEnableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation"></a>

```typescript
public resetEnableValueValidationOnAssociation(): void
```

##### `resetIsReadOnly` <a name="resetIsReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly"></a>

```typescript
public resetIsReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput">enableValueValidationOnAssociationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput">isReadOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation">enableValueValidationOnAssociation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly">isReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableValueValidationOnAssociationInput`<sup>Optional</sup> <a name="enableValueValidationOnAssociationInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput"></a>

```typescript
public readonly enableValueValidationOnAssociationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isReadOnlyInput`<sup>Optional</sup> <a name="isReadOnlyInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput"></a>

```typescript
public readonly isReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableValueValidationOnAssociation`<sup>Required</sup> <a name="enableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation"></a>

```typescript
public readonly enableValueValidationOnAssociation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly"></a>

```typescript
public readonly isReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectPredefinedAttributeAttributeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---


### ConnectPredefinedAttributeValuesOutputReference <a name="ConnectPredefinedAttributeValuesOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer"></a>

```typescript
import { connectPredefinedAttribute } from '@cdktn/provider-awscc'

new connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList">resetStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStringList` <a name="resetStringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList"></a>

```typescript
public resetStringList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput">stringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList">stringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringListInput`<sup>Optional</sup> <a name="stringListInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput"></a>

```typescript
public readonly stringListInput: string[];
```

- *Type:* string[]

---

##### `stringList`<sup>Required</sup> <a name="stringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList"></a>

```typescript
public readonly stringList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectPredefinedAttributeValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---



