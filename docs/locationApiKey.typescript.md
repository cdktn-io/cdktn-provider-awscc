# `locationApiKey` Submodule <a name="`locationApiKey` Submodule" id="@cdktn/provider-awscc.locationApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationApiKey <a name="LocationApiKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key awscc_location_api_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

new locationApiKey.LocationApiKey(scope: Construct, id: string, config: LocationApiKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig">LocationApiKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig">LocationApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetNoExpiry">resetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRestrictions` <a name="putRestrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions"></a>

```typescript
public putRestrictions(value: LocationApiKeyRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags"></a>

```typescript
public putTags(value: IResolvable | LocationApiKeyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceUpdate"></a>

```typescript
public resetForceUpdate(): void
```

##### `resetNoExpiry` <a name="resetNoExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetNoExpiry"></a>

```typescript
public resetNoExpiry(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LocationApiKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

locationApiKey.LocationApiKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

locationApiKey.LocationApiKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

locationApiKey.LocationApiKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

locationApiKey.LocationApiKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LocationApiKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LocationApiKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LocationApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LocationApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference">LocationApiKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList">LocationApiKeyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdateInput">forceUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiryInput">noExpiryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictionsInput">restrictionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiry">noExpiry</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictions"></a>

```typescript
public readonly restrictions: LocationApiKeyRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference">LocationApiKeyRestrictionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tags"></a>

```typescript
public readonly tags: LocationApiKeyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList">LocationApiKeyTagsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `noExpiryInput`<sup>Optional</sup> <a name="noExpiryInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiryInput"></a>

```typescript
public readonly noExpiryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictionsInput"></a>

```typescript
public readonly restrictionsInput: IResolvable | LocationApiKeyRestrictions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LocationApiKeyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `noExpiry`<sup>Required</sup> <a name="noExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiry"></a>

```typescript
public readonly noExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LocationApiKeyConfig <a name="LocationApiKeyConfig" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

const locationApiKeyConfig: locationApiKey.LocationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#description LocationApiKey#description}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.expireTime">expireTime</a></code> | <code>string</code> | The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ). |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.noExpiry">noExpiry</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}.

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.restrictions"></a>

```typescript
public readonly restrictions: LocationApiKeyRestrictions;
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#description LocationApiKey#description}.

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#expire_time LocationApiKey#expire_time}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}.

---

##### `noExpiry`<sup>Optional</sup> <a name="noExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.noExpiry"></a>

```typescript
public readonly noExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LocationApiKeyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#tags LocationApiKey#tags}

---

### LocationApiKeyRestrictions <a name="LocationApiKeyRestrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

const locationApiKeyRestrictions: locationApiKey.LocationApiKeyRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowActions">allowActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowResources">allowResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAndroidApps">allowAndroidApps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAppleApps">allowAppleApps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowReferers">allowReferers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}. |

---

##### `allowActions`<sup>Required</sup> <a name="allowActions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowActions"></a>

```typescript
public readonly allowActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}.

---

##### `allowResources`<sup>Required</sup> <a name="allowResources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowResources"></a>

```typescript
public readonly allowResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}.

---

##### `allowAndroidApps`<sup>Optional</sup> <a name="allowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAndroidApps"></a>

```typescript
public readonly allowAndroidApps: IResolvable | LocationApiKeyRestrictionsAllowAndroidApps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}.

---

##### `allowAppleApps`<sup>Optional</sup> <a name="allowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAppleApps"></a>

```typescript
public readonly allowAppleApps: IResolvable | LocationApiKeyRestrictionsAllowAppleApps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}.

---

##### `allowReferers`<sup>Optional</sup> <a name="allowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowReferers"></a>

```typescript
public readonly allowReferers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}.

---

### LocationApiKeyRestrictionsAllowAndroidApps <a name="LocationApiKeyRestrictionsAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

const locationApiKeyRestrictionsAllowAndroidApps: locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.certificateFingerprint">certificateFingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#certificate_fingerprint LocationApiKey#certificate_fingerprint}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.package">package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#package LocationApiKey#package}. |

---

##### `certificateFingerprint`<sup>Optional</sup> <a name="certificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.certificateFingerprint"></a>

```typescript
public readonly certificateFingerprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#certificate_fingerprint LocationApiKey#certificate_fingerprint}.

---

##### `package`<sup>Optional</sup> <a name="package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#package LocationApiKey#package}.

---

### LocationApiKeyRestrictionsAllowAppleApps <a name="LocationApiKeyRestrictionsAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

const locationApiKeyRestrictionsAllowAppleApps: locationApiKey.LocationApiKeyRestrictionsAllowAppleApps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.property.bundleId">bundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#bundle_id LocationApiKey#bundle_id}. |

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#bundle_id LocationApiKey#bundle_id}.

---

### LocationApiKeyTags <a name="LocationApiKeyTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

const locationApiKeyTags: locationApiKey.LocationApiKeyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#key LocationApiKey#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#value LocationApiKey#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LocationApiKeyRestrictionsAllowAndroidAppsList <a name="LocationApiKeyRestrictionsAllowAndroidAppsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

new locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get"></a>

```typescript
public get(index: number): LocationApiKeyRestrictionsAllowAndroidAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LocationApiKeyRestrictionsAllowAndroidApps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>[]

---


### LocationApiKeyRestrictionsAllowAndroidAppsOutputReference <a name="LocationApiKeyRestrictionsAllowAndroidAppsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

new locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetCertificateFingerprint">resetCertificateFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetPackage">resetPackage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateFingerprint` <a name="resetCertificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetCertificateFingerprint"></a>

```typescript
public resetCertificateFingerprint(): void
```

##### `resetPackage` <a name="resetPackage" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetPackage"></a>

```typescript
public resetPackage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprintInput">certificateFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint">certificateFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateFingerprintInput`<sup>Optional</sup> <a name="certificateFingerprintInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprintInput"></a>

```typescript
public readonly certificateFingerprintInput: string;
```

- *Type:* string

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `certificateFingerprint`<sup>Required</sup> <a name="certificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint"></a>

```typescript
public readonly certificateFingerprint: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LocationApiKeyRestrictionsAllowAndroidApps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>

---


### LocationApiKeyRestrictionsAllowAppleAppsList <a name="LocationApiKeyRestrictionsAllowAppleAppsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

new locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get"></a>

```typescript
public get(index: number): LocationApiKeyRestrictionsAllowAppleAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LocationApiKeyRestrictionsAllowAppleApps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>[]

---


### LocationApiKeyRestrictionsAllowAppleAppsOutputReference <a name="LocationApiKeyRestrictionsAllowAppleAppsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

new locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resetBundleId">resetBundleId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleId` <a name="resetBundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resetBundleId"></a>

```typescript
public resetBundleId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleIdInput">bundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleIdInput"></a>

```typescript
public readonly bundleIdInput: string;
```

- *Type:* string

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LocationApiKeyRestrictionsAllowAppleApps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>

---


### LocationApiKeyRestrictionsOutputReference <a name="LocationApiKeyRestrictionsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

new locationApiKey.LocationApiKeyRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps">putAllowAndroidApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps">putAllowAppleApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAndroidApps">resetAllowAndroidApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAppleApps">resetAllowAppleApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowReferers">resetAllowReferers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowAndroidApps` <a name="putAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps"></a>

```typescript
public putAllowAndroidApps(value: IResolvable | LocationApiKeyRestrictionsAllowAndroidApps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>[]

---

##### `putAllowAppleApps` <a name="putAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps"></a>

```typescript
public putAllowAppleApps(value: IResolvable | LocationApiKeyRestrictionsAllowAppleApps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>[]

---

##### `resetAllowAndroidApps` <a name="resetAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAndroidApps"></a>

```typescript
public resetAllowAndroidApps(): void
```

##### `resetAllowAppleApps` <a name="resetAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAppleApps"></a>

```typescript
public resetAllowAppleApps(): void
```

##### `resetAllowReferers` <a name="resetAllowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowReferers"></a>

```typescript
public resetAllowReferers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidApps">allowAndroidApps</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList">LocationApiKeyRestrictionsAllowAndroidAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleApps">allowAppleApps</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList">LocationApiKeyRestrictionsAllowAppleAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActionsInput">allowActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidAppsInput">allowAndroidAppsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleAppsInput">allowAppleAppsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferersInput">allowReferersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResourcesInput">allowResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActions">allowActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferers">allowReferers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResources">allowResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAndroidApps`<sup>Required</sup> <a name="allowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidApps"></a>

```typescript
public readonly allowAndroidApps: LocationApiKeyRestrictionsAllowAndroidAppsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList">LocationApiKeyRestrictionsAllowAndroidAppsList</a>

---

##### `allowAppleApps`<sup>Required</sup> <a name="allowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleApps"></a>

```typescript
public readonly allowAppleApps: LocationApiKeyRestrictionsAllowAppleAppsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList">LocationApiKeyRestrictionsAllowAppleAppsList</a>

---

##### `allowActionsInput`<sup>Optional</sup> <a name="allowActionsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActionsInput"></a>

```typescript
public readonly allowActionsInput: string[];
```

- *Type:* string[]

---

##### `allowAndroidAppsInput`<sup>Optional</sup> <a name="allowAndroidAppsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidAppsInput"></a>

```typescript
public readonly allowAndroidAppsInput: IResolvable | LocationApiKeyRestrictionsAllowAndroidApps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>[]

---

##### `allowAppleAppsInput`<sup>Optional</sup> <a name="allowAppleAppsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleAppsInput"></a>

```typescript
public readonly allowAppleAppsInput: IResolvable | LocationApiKeyRestrictionsAllowAppleApps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>[]

---

##### `allowReferersInput`<sup>Optional</sup> <a name="allowReferersInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferersInput"></a>

```typescript
public readonly allowReferersInput: string[];
```

- *Type:* string[]

---

##### `allowResourcesInput`<sup>Optional</sup> <a name="allowResourcesInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResourcesInput"></a>

```typescript
public readonly allowResourcesInput: string[];
```

- *Type:* string[]

---

##### `allowActions`<sup>Required</sup> <a name="allowActions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActions"></a>

```typescript
public readonly allowActions: string[];
```

- *Type:* string[]

---

##### `allowReferers`<sup>Required</sup> <a name="allowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferers"></a>

```typescript
public readonly allowReferers: string[];
```

- *Type:* string[]

---

##### `allowResources`<sup>Required</sup> <a name="allowResources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResources"></a>

```typescript
public readonly allowResources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LocationApiKeyRestrictions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---


### LocationApiKeyTagsList <a name="LocationApiKeyTagsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

new locationApiKey.LocationApiKeyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get"></a>

```typescript
public get(index: number): LocationApiKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LocationApiKeyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>[]

---


### LocationApiKeyTagsOutputReference <a name="LocationApiKeyTagsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer"></a>

```typescript
import { locationApiKey } from '@cdktn/provider-awscc'

new locationApiKey.LocationApiKeyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LocationApiKeyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>

---



