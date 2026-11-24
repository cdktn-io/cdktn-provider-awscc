# `apiportalDiscoveryConfiguration` Submodule <a name="`apiportalDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalDiscoveryConfiguration <a name="ApiportalDiscoveryConfiguration" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration awscc_apiportal_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration(scope: Construct, id: string, config: ApiportalDiscoveryConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig">ApiportalDiscoveryConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig">ApiportalDiscoveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetDiscoveryFeatures">resetDiscoveryFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetExcludedResources">resetExcludedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | ApiportalDiscoveryConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]

---

##### `resetDiscoveryFeatures` <a name="resetDiscoveryFeatures" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetDiscoveryFeatures"></a>

```typescript
public resetDiscoveryFeatures(): void
```

##### `resetExcludedResources` <a name="resetExcludedResources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetExcludedResources"></a>

```typescript
public resetExcludedResources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiportalDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalDiscoveryConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryConfigurationStatus">discoveryConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList">ApiportalDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeaturesInput">discoveryFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySourcesInput">discoverySourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResourcesInput">excludedResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeatures">discoveryFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySources">discoverySources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResources">excludedResources</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `discoveryConfigurationStatus`<sup>Required</sup> <a name="discoveryConfigurationStatus" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```typescript
public readonly discoveryConfigurationStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tags"></a>

```typescript
public readonly tags: ApiportalDiscoveryConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList">ApiportalDiscoveryConfigurationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `discoveryFeaturesInput`<sup>Optional</sup> <a name="discoveryFeaturesInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeaturesInput"></a>

```typescript
public readonly discoveryFeaturesInput: string[];
```

- *Type:* string[]

---

##### `discoverySourcesInput`<sup>Optional</sup> <a name="discoverySourcesInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySourcesInput"></a>

```typescript
public readonly discoverySourcesInput: string[];
```

- *Type:* string[]

---

##### `excludedResourcesInput`<sup>Optional</sup> <a name="excludedResourcesInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResourcesInput"></a>

```typescript
public readonly excludedResourcesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApiportalDiscoveryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]

---

##### `discoveryFeatures`<sup>Required</sup> <a name="discoveryFeatures" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeatures"></a>

```typescript
public readonly discoveryFeatures: string[];
```

- *Type:* string[]

---

##### `discoverySources`<sup>Required</sup> <a name="discoverySources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySources"></a>

```typescript
public readonly discoverySources: string[];
```

- *Type:* string[]

---

##### `excludedResources`<sup>Required</sup> <a name="excludedResources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResources"></a>

```typescript
public readonly excludedResources: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalDiscoveryConfigurationConfig <a name="ApiportalDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.Initializer"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

const apiportalDiscoveryConfigurationConfig: apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoverySources">discoverySources</a></code> | <code>string[]</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoveryFeatures">discoveryFeatures</a></code> | <code>string[]</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.excludedResources">excludedResources</a></code> | <code>string[]</code> | ARNs of resources to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]</code> | The tags associated with the discovery configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `discoverySources`<sup>Required</sup> <a name="discoverySources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoverySources"></a>

```typescript
public readonly discoverySources: string[];
```

- *Type:* string[]

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_sources ApiportalDiscoveryConfiguration#discovery_sources}

---

##### `discoveryFeatures`<sup>Optional</sup> <a name="discoveryFeatures" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoveryFeatures"></a>

```typescript
public readonly discoveryFeatures: string[];
```

- *Type:* string[]

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_features ApiportalDiscoveryConfiguration#discovery_features}

---

##### `excludedResources`<sup>Optional</sup> <a name="excludedResources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.excludedResources"></a>

```typescript
public readonly excludedResources: string[];
```

- *Type:* string[]

ARNs of resources to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#excluded_resources ApiportalDiscoveryConfiguration#excluded_resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApiportalDiscoveryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]

The tags associated with the discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#tags ApiportalDiscoveryConfiguration#tags}

---

### ApiportalDiscoveryConfigurationTags <a name="ApiportalDiscoveryConfigurationTags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.Initializer"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

const apiportalDiscoveryConfigurationTags: apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#key ApiportalDiscoveryConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#value ApiportalDiscoveryConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#key ApiportalDiscoveryConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#value ApiportalDiscoveryConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalDiscoveryConfigurationTagsList <a name="ApiportalDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get"></a>

```typescript
public get(index: number): ApiportalDiscoveryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalDiscoveryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]

---


### ApiportalDiscoveryConfigurationTagsOutputReference <a name="ApiportalDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { apiportalDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalDiscoveryConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>

---



