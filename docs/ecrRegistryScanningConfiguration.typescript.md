# `ecrRegistryScanningConfiguration` Submodule <a name="`ecrRegistryScanningConfiguration` Submodule" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRegistryScanningConfiguration <a name="EcrRegistryScanningConfiguration" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_registry_scanning_configuration awscc_ecr_registry_scanning_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration(scope: Construct, id: string, config: EcrRegistryScanningConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig">EcrRegistryScanningConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig">EcrRegistryScanningConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules">putRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules"></a>

```typescript
public putRules(value: IResolvable | EcrRegistryScanningConfigurationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcrRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EcrRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrRegistryScanningConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrRegistryScanningConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_registry_scanning_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcrRegistryScanningConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList">EcrRegistryScanningConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput">scanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType">scanType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rules"></a>

```typescript
public readonly rules: EcrRegistryScanningConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList">EcrRegistryScanningConfigurationRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | EcrRegistryScanningConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>[]

---

##### `scanTypeInput`<sup>Optional</sup> <a name="scanTypeInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput"></a>

```typescript
public readonly scanTypeInput: string;
```

- *Type:* string

---

##### `scanType`<sup>Required</sup> <a name="scanType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType"></a>

```typescript
public readonly scanType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRegistryScanningConfigurationConfig <a name="EcrRegistryScanningConfigurationConfig" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

const ecrRegistryScanningConfigurationConfig: ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>[]</code> | The scanning rules associated with the registry. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType">scanType</a></code> | <code>string</code> | The type of scanning configured for the registry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | EcrRegistryScanningConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>[]

The scanning rules associated with the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_registry_scanning_configuration#rules EcrRegistryScanningConfiguration#rules}

---

##### `scanType`<sup>Required</sup> <a name="scanType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType"></a>

```typescript
public readonly scanType: string;
```

- *Type:* string

The type of scanning configured for the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}

---

### EcrRegistryScanningConfigurationRules <a name="EcrRegistryScanningConfigurationRules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

const ecrRegistryScanningConfigurationRules: ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.repositoryFilters">repositoryFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>[]</code> | The details of a scanning repository filter. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.scanFrequency">scanFrequency</a></code> | <code>string</code> | The frequency that scans are performed at for a private registry. |

---

##### `repositoryFilters`<sup>Required</sup> <a name="repositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.repositoryFilters"></a>

```typescript
public readonly repositoryFilters: IResolvable | EcrRegistryScanningConfigurationRulesRepositoryFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>[]

The details of a scanning repository filter.

For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_registry_scanning_configuration#repository_filters EcrRegistryScanningConfiguration#repository_filters}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: string;
```

- *Type:* string

The frequency that scans are performed at for a private registry.

When the ``ENHANCED`` scan type is specified, the supported scan frequencies are ``CONTINUOUS_SCAN`` and ``SCAN_ON_PUSH``. When the ``BASIC`` scan type is specified, the ``SCAN_ON_PUSH`` scan frequency is supported. If scan on push is not specified, then the ``MANUAL`` scan frequency is set by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}

---

### EcrRegistryScanningConfigurationRulesRepositoryFilters <a name="EcrRegistryScanningConfigurationRulesRepositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

const ecrRegistryScanningConfigurationRulesRepositoryFilters: ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filter">filter</a></code> | <code>string</code> | The filter to use when scanning. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filterType">filterType</a></code> | <code>string</code> | The type associated with the filter. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to use when scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

The type associated with the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRegistryScanningConfigurationRulesList <a name="EcrRegistryScanningConfigurationRulesList" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get"></a>

```typescript
public get(index: number): EcrRegistryScanningConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRegistryScanningConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>[]

---


### EcrRegistryScanningConfigurationRulesOutputReference <a name="EcrRegistryScanningConfigurationRulesOutputReference" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters">putRepositoryFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepositoryFilters` <a name="putRepositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters"></a>

```typescript
public putRepositoryFilters(value: IResolvable | EcrRegistryScanningConfigurationRulesRepositoryFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFilters">repositoryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList">EcrRegistryScanningConfigurationRulesRepositoryFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFiltersInput">repositoryFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequency">scanFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryFilters`<sup>Required</sup> <a name="repositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFilters"></a>

```typescript
public readonly repositoryFilters: EcrRegistryScanningConfigurationRulesRepositoryFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList">EcrRegistryScanningConfigurationRulesRepositoryFiltersList</a>

---

##### `repositoryFiltersInput`<sup>Optional</sup> <a name="repositoryFiltersInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFiltersInput"></a>

```typescript
public readonly repositoryFiltersInput: IResolvable | EcrRegistryScanningConfigurationRulesRepositoryFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>[]

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequencyInput"></a>

```typescript
public readonly scanFrequencyInput: string;
```

- *Type:* string

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRegistryScanningConfigurationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>

---


### EcrRegistryScanningConfigurationRulesRepositoryFiltersList <a name="EcrRegistryScanningConfigurationRulesRepositoryFiltersList" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get"></a>

```typescript
public get(index: number): EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRegistryScanningConfigurationRulesRepositoryFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>[]

---


### EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference <a name="EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktn/provider-awscc'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRegistryScanningConfigurationRulesRepositoryFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>

---



