# `shieldProtection` Submodule <a name="`shieldProtection` Submodule" id="@cdktn/provider-awscc.shieldProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtection <a name="ShieldProtection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection awscc_shield_protection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

new shieldProtection.ShieldProtection(scope: Construct, id: string, config: ShieldProtectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig">ShieldProtectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig">ShieldProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration">putApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetApplicationLayerAutomaticResponseConfiguration">resetApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetHealthCheckArns">resetHealthCheckArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationLayerAutomaticResponseConfiguration` <a name="putApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration"></a>

```typescript
public putApplicationLayerAutomaticResponseConfiguration(value: ShieldProtectionApplicationLayerAutomaticResponseConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags"></a>

```typescript
public putTags(value: IResolvable | ShieldProtectionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]

---

##### `resetApplicationLayerAutomaticResponseConfiguration` <a name="resetApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetApplicationLayerAutomaticResponseConfiguration"></a>

```typescript
public resetApplicationLayerAutomaticResponseConfiguration(): void
```

##### `resetHealthCheckArns` <a name="resetHealthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetHealthCheckArns"></a>

```typescript
public resetHealthCheckArns(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ShieldProtection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

shieldProtection.ShieldProtection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

shieldProtection.ShieldProtection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

shieldProtection.ShieldProtection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

shieldProtection.ShieldProtection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ShieldProtection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ShieldProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfiguration">applicationLayerAutomaticResponseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionArn">protectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionId">protectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList">ShieldProtectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfigurationInput">applicationLayerAutomaticResponseConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArnsInput">healthCheckArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArns">healthCheckArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationLayerAutomaticResponseConfiguration`<sup>Required</sup> <a name="applicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfiguration"></a>

```typescript
public readonly applicationLayerAutomaticResponseConfiguration: ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protectionArn`<sup>Required</sup> <a name="protectionArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionArn"></a>

```typescript
public readonly protectionArn: string;
```

- *Type:* string

---

##### `protectionId`<sup>Required</sup> <a name="protectionId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionId"></a>

```typescript
public readonly protectionId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tags"></a>

```typescript
public readonly tags: ShieldProtectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList">ShieldProtectionTagsList</a>

---

##### `applicationLayerAutomaticResponseConfigurationInput`<sup>Optional</sup> <a name="applicationLayerAutomaticResponseConfigurationInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfigurationInput"></a>

```typescript
public readonly applicationLayerAutomaticResponseConfigurationInput: IResolvable | ShieldProtectionApplicationLayerAutomaticResponseConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---

##### `healthCheckArnsInput`<sup>Optional</sup> <a name="healthCheckArnsInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArnsInput"></a>

```typescript
public readonly healthCheckArnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ShieldProtectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]

---

##### `healthCheckArns`<sup>Required</sup> <a name="healthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArns"></a>

```typescript
public readonly healthCheckArns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionApplicationLayerAutomaticResponseConfiguration <a name="ShieldProtectionApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

const shieldProtectionApplicationLayerAutomaticResponseConfiguration: shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.status">status</a></code> | <code>string</code> | Indicates whether automatic application layer DDoS mitigation is enabled for the protection. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.action"></a>

```typescript
public readonly action: ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks.

You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#action ShieldProtection#action}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates whether automatic application layer DDoS mitigation is enabled for the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#status ShieldProtection#status}

---

### ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

const shieldProtectionApplicationLayerAutomaticResponseConfigurationAction: shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.block">block</a></code> | <code>string</code> | Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.count">count</a></code> | <code>string</code> | Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action. |

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.block"></a>

```typescript
public readonly block: string;
```

- *Type:* string

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#block ShieldProtection#block}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#count ShieldProtection#count}

---

### ShieldProtectionConfig <a name="ShieldProtectionConfig" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

const shieldProtectionConfig: shieldProtection.ShieldProtectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.name">name</a></code> | <code>string</code> | Friendly name for the Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | The ARN (Amazon Resource Name) of the resource to be protected. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.applicationLayerAutomaticResponseConfiguration">applicationLayerAutomaticResponseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | The automatic application layer DDoS mitigation settings for a Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.healthCheckArns">healthCheckArns</a></code> | <code>string[]</code> | The Amazon Resource Names (ARNs) of the health check to associate with the protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]</code> | One or more tag key-value pairs for the Protection object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Friendly name for the Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#name ShieldProtection#name}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The ARN (Amazon Resource Name) of the resource to be protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#resource_arn ShieldProtection#resource_arn}

---

##### `applicationLayerAutomaticResponseConfiguration`<sup>Optional</sup> <a name="applicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.applicationLayerAutomaticResponseConfiguration"></a>

```typescript
public readonly applicationLayerAutomaticResponseConfiguration: ShieldProtectionApplicationLayerAutomaticResponseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

The automatic application layer DDoS mitigation settings for a Protection.

This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#application_layer_automatic_response_configuration ShieldProtection#application_layer_automatic_response_configuration}

---

##### `healthCheckArns`<sup>Optional</sup> <a name="healthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.healthCheckArns"></a>

```typescript
public readonly healthCheckArns: string[];
```

- *Type:* string[]

The Amazon Resource Names (ARNs) of the health check to associate with the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#health_check_arns ShieldProtection#health_check_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ShieldProtectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]

One or more tag key-value pairs for the Protection object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#tags ShieldProtection#tags}

---

### ShieldProtectionTags <a name="ShieldProtectionTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

const shieldProtectionTags: shieldProtection.ShieldProtectionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.key">key</a></code> | <code>string</code> | Part of the key:value pair that defines a tag. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.value">value</a></code> | <code>string</code> | Part of the key:value pair that defines a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Part of the key:value pair that defines a tag.

You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#key ShieldProtection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Part of the key:value pair that defines a tag.

You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#value ShieldProtection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

new shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetBlock">resetBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetCount">resetCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlock` <a name="resetBlock" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetBlock"></a>

```typescript
public resetBlock(): void
```

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.blockInput">blockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.countInput">countInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.block">block</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.count">count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockInput`<sup>Optional</sup> <a name="blockInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.blockInput"></a>

```typescript
public readonly blockInput: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: string;
```

- *Type:* string

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.block"></a>

```typescript
public readonly block: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---


### ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

new shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction"></a>

```typescript
public putAction(value: ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.action"></a>

```typescript
public readonly action: ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldProtectionApplicationLayerAutomaticResponseConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---


### ShieldProtectionTagsList <a name="ShieldProtectionTagsList" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

new shieldProtection.ShieldProtectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get"></a>

```typescript
public get(index: number): ShieldProtectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldProtectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]

---


### ShieldProtectionTagsOutputReference <a name="ShieldProtectionTagsOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer"></a>

```typescript
import { shieldProtection } from '@cdktn/provider-awscc'

new shieldProtection.ShieldProtectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldProtectionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>

---



