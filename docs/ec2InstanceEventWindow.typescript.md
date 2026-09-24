# `ec2InstanceEventWindow` Submodule <a name="`ec2InstanceEventWindow` Submodule" id="@cdktn/provider-awscc.ec2InstanceEventWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceEventWindow <a name="Ec2InstanceEventWindow" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window awscc_ec2_instance_event_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

new ec2InstanceEventWindow.Ec2InstanceEventWindow(scope: Construct, id: string, config?: Ec2InstanceEventWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig">Ec2InstanceEventWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig">Ec2InstanceEventWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges">putTimeRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTimeRanges">resetTimeRanges</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2InstanceEventWindowTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]

---

##### `putTimeRanges` <a name="putTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges"></a>

```typescript
public putTimeRanges(value: IResolvable | Ec2InstanceEventWindowTimeRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]

---

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetCronExpression"></a>

```typescript
public resetCronExpression(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeRanges` <a name="resetTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTimeRanges"></a>

```typescript
public resetTimeRanges(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2InstanceEventWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2InstanceEventWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2InstanceEventWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.instanceEventWindowId">instanceEventWindowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList">Ec2InstanceEventWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRanges">timeRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList">Ec2InstanceEventWindowTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRangesInput">timeRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceEventWindowId`<sup>Required</sup> <a name="instanceEventWindowId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.instanceEventWindowId"></a>

```typescript
public readonly instanceEventWindowId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tags"></a>

```typescript
public readonly tags: Ec2InstanceEventWindowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList">Ec2InstanceEventWindowTagsList</a>

---

##### `timeRanges`<sup>Required</sup> <a name="timeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRanges"></a>

```typescript
public readonly timeRanges: Ec2InstanceEventWindowTimeRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList">Ec2InstanceEventWindowTimeRangesList</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2InstanceEventWindowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]

---

##### `timeRangesInput`<sup>Optional</sup> <a name="timeRangesInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRangesInput"></a>

```typescript
public readonly timeRangesInput: IResolvable | Ec2InstanceEventWindowTimeRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceEventWindowConfig <a name="Ec2InstanceEventWindowConfig" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.Initializer"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

const ec2InstanceEventWindowConfig: ec2InstanceEventWindow.Ec2InstanceEventWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.cronExpression">cronExpression</a></code> | <code>string</code> | The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.name">name</a></code> | <code>string</code> | The name of the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]</code> | The tags applied to the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.timeRanges">timeRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]</code> | The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#cron_expression Ec2InstanceEventWindow#cron_expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#name Ec2InstanceEventWindow#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2InstanceEventWindowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]

The tags applied to the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#tags Ec2InstanceEventWindow#tags}

---

##### `timeRanges`<sup>Optional</sup> <a name="timeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.timeRanges"></a>

```typescript
public readonly timeRanges: IResolvable | Ec2InstanceEventWindowTimeRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]

The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#time_ranges Ec2InstanceEventWindow#time_ranges}

---

### Ec2InstanceEventWindowTags <a name="Ec2InstanceEventWindowTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.Initializer"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

const ec2InstanceEventWindowTags: ec2InstanceEventWindow.Ec2InstanceEventWindowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#key Ec2InstanceEventWindow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#value Ec2InstanceEventWindow#value}

---

### Ec2InstanceEventWindowTimeRanges <a name="Ec2InstanceEventWindowTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.Initializer"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

const ec2InstanceEventWindowTimeRanges: ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endHour">endHour</a></code> | <code>number</code> | The hour when the time range ends. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endWeekDay">endWeekDay</a></code> | <code>string</code> | The day on which the time range ends. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startHour">startHour</a></code> | <code>number</code> | The hour when the time range begins. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startWeekDay">startWeekDay</a></code> | <code>string</code> | The day on which the time range begins. |

---

##### `endHour`<sup>Optional</sup> <a name="endHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endHour"></a>

```typescript
public readonly endHour: number;
```

- *Type:* number

The hour when the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_hour Ec2InstanceEventWindow#end_hour}

---

##### `endWeekDay`<sup>Optional</sup> <a name="endWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endWeekDay"></a>

```typescript
public readonly endWeekDay: string;
```

- *Type:* string

The day on which the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_week_day Ec2InstanceEventWindow#end_week_day}

---

##### `startHour`<sup>Optional</sup> <a name="startHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

The hour when the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_hour Ec2InstanceEventWindow#start_hour}

---

##### `startWeekDay`<sup>Optional</sup> <a name="startWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startWeekDay"></a>

```typescript
public readonly startWeekDay: string;
```

- *Type:* string

The day on which the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_week_day Ec2InstanceEventWindow#start_week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceEventWindowTagsList <a name="Ec2InstanceEventWindowTagsList" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

new ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get"></a>

```typescript
public get(index: number): Ec2InstanceEventWindowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceEventWindowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]

---


### Ec2InstanceEventWindowTagsOutputReference <a name="Ec2InstanceEventWindowTagsOutputReference" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

new ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceEventWindowTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>

---


### Ec2InstanceEventWindowTimeRangesList <a name="Ec2InstanceEventWindowTimeRangesList" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

new ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get"></a>

```typescript
public get(index: number): Ec2InstanceEventWindowTimeRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceEventWindowTimeRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]

---


### Ec2InstanceEventWindowTimeRangesOutputReference <a name="Ec2InstanceEventWindowTimeRangesOutputReference" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer"></a>

```typescript
import { ec2InstanceEventWindow } from '@cdktn/provider-awscc'

new ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndHour">resetEndHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndWeekDay">resetEndWeekDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartHour">resetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartWeekDay">resetStartWeekDay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndHour` <a name="resetEndHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndHour"></a>

```typescript
public resetEndHour(): void
```

##### `resetEndWeekDay` <a name="resetEndWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndWeekDay"></a>

```typescript
public resetEndWeekDay(): void
```

##### `resetStartHour` <a name="resetStartHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartHour"></a>

```typescript
public resetStartHour(): void
```

##### `resetStartWeekDay` <a name="resetStartWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartWeekDay"></a>

```typescript
public resetStartWeekDay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHourInput">endHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDayInput">endWeekDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHourInput">startHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDayInput">startWeekDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHour">endHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay">endWeekDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHour">startHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay">startWeekDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endHourInput`<sup>Optional</sup> <a name="endHourInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHourInput"></a>

```typescript
public readonly endHourInput: number;
```

- *Type:* number

---

##### `endWeekDayInput`<sup>Optional</sup> <a name="endWeekDayInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDayInput"></a>

```typescript
public readonly endWeekDayInput: string;
```

- *Type:* string

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHourInput"></a>

```typescript
public readonly startHourInput: number;
```

- *Type:* number

---

##### `startWeekDayInput`<sup>Optional</sup> <a name="startWeekDayInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDayInput"></a>

```typescript
public readonly startWeekDayInput: string;
```

- *Type:* string

---

##### `endHour`<sup>Required</sup> <a name="endHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHour"></a>

```typescript
public readonly endHour: number;
```

- *Type:* number

---

##### `endWeekDay`<sup>Required</sup> <a name="endWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay"></a>

```typescript
public readonly endWeekDay: string;
```

- *Type:* string

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

---

##### `startWeekDay`<sup>Required</sup> <a name="startWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay"></a>

```typescript
public readonly startWeekDay: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceEventWindowTimeRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>

---



