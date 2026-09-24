# `iotThingPrincipalAttachment` Submodule <a name="`iotThingPrincipalAttachment` Submodule" id="@cdktn/provider-awscc.iotThingPrincipalAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotThingPrincipalAttachment <a name="IotThingPrincipalAttachment" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment awscc_iot_thing_principal_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktn/provider-awscc'

new iotThingPrincipalAttachment.IotThingPrincipalAttachment(scope: Construct, id: string, config: IotThingPrincipalAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig">IotThingPrincipalAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig">IotThingPrincipalAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetThingPrincipalType">resetThingPrincipalType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetThingPrincipalType` <a name="resetThingPrincipalType" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetThingPrincipalType"></a>

```typescript
public resetThingPrincipalType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotThingPrincipalAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktn/provider-awscc'

iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktn/provider-awscc'

iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktn/provider-awscc'

iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktn/provider-awscc'

iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotThingPrincipalAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotThingPrincipalAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotThingPrincipalAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotThingPrincipalAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingNameInput">thingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingPrincipalTypeInput">thingPrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingName">thingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingPrincipalType">thingPrincipalType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `thingNameInput`<sup>Optional</sup> <a name="thingNameInput" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingNameInput"></a>

```typescript
public readonly thingNameInput: string;
```

- *Type:* string

---

##### `thingPrincipalTypeInput`<sup>Optional</sup> <a name="thingPrincipalTypeInput" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingPrincipalTypeInput"></a>

```typescript
public readonly thingPrincipalTypeInput: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

---

##### `thingPrincipalType`<sup>Required</sup> <a name="thingPrincipalType" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingPrincipalType"></a>

```typescript
public readonly thingPrincipalType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotThingPrincipalAttachmentConfig <a name="IotThingPrincipalAttachmentConfig" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.Initializer"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktn/provider-awscc'

const iotThingPrincipalAttachmentConfig: iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.principal">principal</a></code> | <code>string</code> | The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thingName">thingName</a></code> | <code>string</code> | The name of the AWS IoT thing. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thingPrincipalType">thingPrincipalType</a></code> | <code>string</code> | The type of the relation you want to specify when you attach a principal to a thing. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#principal IotThingPrincipalAttachment#principal}

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The name of the AWS IoT thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#thing_name IotThingPrincipalAttachment#thing_name}

---

##### `thingPrincipalType`<sup>Optional</sup> <a name="thingPrincipalType" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thingPrincipalType"></a>

```typescript
public readonly thingPrincipalType: string;
```

- *Type:* string

The type of the relation you want to specify when you attach a principal to a thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#thing_principal_type IotThingPrincipalAttachment#thing_principal_type}

---



