# `medialiveInputSecurityGroup` Submodule <a name="`medialiveInputSecurityGroup` Submodule" id="@cdktn/provider-awscc.medialiveInputSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveInputSecurityGroup <a name="MedialiveInputSecurityGroup" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group awscc_medialive_input_security_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

new medialiveInputSecurityGroup.MedialiveInputSecurityGroup(scope: Construct, id: string, config?: MedialiveInputSecurityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig">MedialiveInputSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig">MedialiveInputSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules">putWhitelistRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetWhitelistRules">resetWhitelistRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putWhitelistRules` <a name="putWhitelistRules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules"></a>

```typescript
public putWhitelistRules(value: IResolvable | MedialiveInputSecurityGroupWhitelistRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWhitelistRules` <a name="resetWhitelistRules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetWhitelistRules"></a>

```typescript
public resetWhitelistRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveInputSecurityGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MedialiveInputSecurityGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveInputSecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveInputSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveInputSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputSecurityGroupId">inputSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRules">whitelistRules</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList">MedialiveInputSecurityGroupWhitelistRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRulesInput">whitelistRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

##### `inputSecurityGroupId`<sup>Required</sup> <a name="inputSecurityGroupId" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputSecurityGroupId"></a>

```typescript
public readonly inputSecurityGroupId: string;
```

- *Type:* string

---

##### `whitelistRules`<sup>Required</sup> <a name="whitelistRules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRules"></a>

```typescript
public readonly whitelistRules: MedialiveInputSecurityGroupWhitelistRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList">MedialiveInputSecurityGroupWhitelistRulesList</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `whitelistRulesInput`<sup>Optional</sup> <a name="whitelistRulesInput" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRulesInput"></a>

```typescript
public readonly whitelistRulesInput: IResolvable | MedialiveInputSecurityGroupWhitelistRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveInputSecurityGroupConfig <a name="MedialiveInputSecurityGroupConfig" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

const medialiveInputSecurityGroupConfig: medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A collection of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.whitelistRules">whitelistRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]</code> | Whitelist rules and their sync status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}

---

##### `whitelistRules`<sup>Optional</sup> <a name="whitelistRules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.whitelistRules"></a>

```typescript
public readonly whitelistRules: IResolvable | MedialiveInputSecurityGroupWhitelistRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]

Whitelist rules and their sync status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#whitelist_rules MedialiveInputSecurityGroup#whitelist_rules}

---

### MedialiveInputSecurityGroupWhitelistRules <a name="MedialiveInputSecurityGroupWhitelistRules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

const medialiveInputSecurityGroupWhitelistRules: medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.property.cidr">cidr</a></code> | <code>string</code> | The IPv4 CIDR that's whitelisted. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The IPv4 CIDR that's whitelisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#cidr MedialiveInputSecurityGroup#cidr}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveInputSecurityGroupWhitelistRulesList <a name="MedialiveInputSecurityGroupWhitelistRulesList" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

new medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get"></a>

```typescript
public get(index: number): MedialiveInputSecurityGroupWhitelistRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveInputSecurityGroupWhitelistRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]

---


### MedialiveInputSecurityGroupWhitelistRulesOutputReference <a name="MedialiveInputSecurityGroupWhitelistRulesOutputReference" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktn/provider-awscc'

new medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveInputSecurityGroupWhitelistRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>

---



