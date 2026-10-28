# `securityagentIntegration` Submodule <a name="`securityagentIntegration` Submodule" id="@cdktn/provider-awscc.securityagentIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentIntegration <a name="SecurityagentIntegration" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration awscc_securityagent_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

new securityagentIntegration.SecurityagentIntegration(scope: Construct, id: string, config: SecurityagentIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig">SecurityagentIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig">SecurityagentIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput">putProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetPrivateConnectionName">resetPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetProviderInput">resetProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderInput` <a name="putProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput"></a>

```typescript
public putProviderInput(value: SecurityagentIntegrationProviderInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags"></a>

```typescript
public putTags(value: IResolvable | SecurityagentIntegrationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPrivateConnectionName` <a name="resetPrivateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetPrivateConnectionName"></a>

```typescript
public resetPrivateConnectionName(): void
```

##### `resetProviderInput` <a name="resetProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetProviderInput"></a>

```typescript
public resetProviderInput(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

securityagentIntegration.SecurityagentIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

securityagentIntegration.SecurityagentIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

securityagentIntegration.SecurityagentIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

securityagentIntegration.SecurityagentIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityagentIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityagentIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityagentIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.installationId">installationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInput">providerInput</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference">SecurityagentIntegrationProviderInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList">SecurityagentIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionNameInput">privateConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInputInput">providerInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `providerInput`<sup>Required</sup> <a name="providerInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInput"></a>

```typescript
public readonly providerInput: SecurityagentIntegrationProviderInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference">SecurityagentIntegrationProviderInputOutputReference</a>

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tags"></a>

```typescript
public readonly tags: SecurityagentIntegrationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList">SecurityagentIntegrationTagsList</a>

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `privateConnectionNameInput`<sup>Optional</sup> <a name="privateConnectionNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionNameInput"></a>

```typescript
public readonly privateConnectionNameInput: string;
```

- *Type:* string

---

##### `providerInputInput`<sup>Optional</sup> <a name="providerInputInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInputInput"></a>

```typescript
public readonly providerInputInput: IResolvable | SecurityagentIntegrationProviderInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SecurityagentIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentIntegrationConfig <a name="SecurityagentIntegrationConfig" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

const securityagentIntegrationConfig: securityagentIntegration.SecurityagentIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerName">providerName</a></code> | <code>string</code> | The integration provider. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The identifier of the AWS KMS key to use for encrypting data associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | The name of an active private connection used to reach a self-hosted provider instance over private networking. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerInput">providerInput</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]</code> | The tags to associate with the integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#display_name SecurityagentIntegration#display_name}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

The integration provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_name SecurityagentIntegration#provider_name}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The identifier of the AWS KMS key to use for encrypting data associated with the integration.

Can be a key ID, key ARN, alias name, or alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#kms_key_id SecurityagentIntegration#kms_key_id}

---

##### `privateConnectionName`<sup>Optional</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

The name of an active private connection used to reach a self-hosted provider instance over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#private_connection_name SecurityagentIntegration#private_connection_name}

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerInput"></a>

```typescript
public readonly providerInput: SecurityagentIntegrationProviderInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_input SecurityagentIntegration#provider_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SecurityagentIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]

The tags to associate with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#tags SecurityagentIntegration#tags}

---

### SecurityagentIntegrationProviderInput <a name="SecurityagentIntegrationProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

const securityagentIntegrationProviderInput: securityagentIntegration.SecurityagentIntegrationProviderInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | The input required to create a Bitbucket integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.confluence">confluence</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | The input required to create a Confluence integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | The input required to create a GitHub integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.gitlab">gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | The input required to create a GitLab integration. |

---

##### `bitbucket`<sup>Optional</sup> <a name="bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.bitbucket"></a>

```typescript
public readonly bitbucket: SecurityagentIntegrationProviderInputBitbucket;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

The input required to create a Bitbucket integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#bitbucket SecurityagentIntegration#bitbucket}

---

##### `confluence`<sup>Optional</sup> <a name="confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.confluence"></a>

```typescript
public readonly confluence: SecurityagentIntegrationProviderInputConfluence;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

The input required to create a Confluence integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#confluence SecurityagentIntegration#confluence}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.github"></a>

```typescript
public readonly github: SecurityagentIntegrationProviderInputGithub;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

The input required to create a GitHub integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#github SecurityagentIntegration#github}

---

##### `gitlab`<sup>Optional</sup> <a name="gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.gitlab"></a>

```typescript
public readonly gitlab: SecurityagentIntegrationProviderInputGitlab;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

The input required to create a GitLab integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#gitlab SecurityagentIntegration#gitlab}

---

### SecurityagentIntegrationProviderInputBitbucket <a name="SecurityagentIntegrationProviderInputBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

const securityagentIntegrationProviderInputBitbucket: securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.code">code</a></code> | <code>string</code> | The OAuth 2.0 authorization code returned from the consent redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.installationId">installationId</a></code> | <code>string</code> | The Atlassian installation identifier, available from the Atlassian administration console. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.state">state</a></code> | <code>string</code> | The CSRF state token echoed back from the OAuth redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.workspace">workspace</a></code> | <code>string</code> | The Bitbucket workspace slug that identifies the workspace to integrate. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `installationId`<sup>Optional</sup> <a name="installationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

The Bitbucket workspace slug that identifies the workspace to integrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#workspace SecurityagentIntegration#workspace}

---

### SecurityagentIntegrationProviderInputConfluence <a name="SecurityagentIntegrationProviderInputConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

const securityagentIntegrationProviderInputConfluence: securityagentIntegration.SecurityagentIntegrationProviderInputConfluence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.code">code</a></code> | <code>string</code> | The OAuth 2.0 authorization code returned from the consent redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.installationId">installationId</a></code> | <code>string</code> | The Atlassian installation identifier, available from the Atlassian administration console. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.siteUrl">siteUrl</a></code> | <code>string</code> | The Confluence Cloud site URL, for example https://mysite.atlassian.net. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.state">state</a></code> | <code>string</code> | The CSRF state token echoed back from the OAuth redirect. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `installationId`<sup>Optional</sup> <a name="installationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `siteUrl`<sup>Optional</sup> <a name="siteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.siteUrl"></a>

```typescript
public readonly siteUrl: string;
```

- *Type:* string

The Confluence Cloud site URL, for example https://mysite.atlassian.net.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#site_url SecurityagentIntegration#site_url}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

### SecurityagentIntegrationProviderInputGithub <a name="SecurityagentIntegrationProviderInputGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

const securityagentIntegrationProviderInputGithub: securityagentIntegration.SecurityagentIntegrationProviderInputGithub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.code">code</a></code> | <code>string</code> | The OAuth authorization code received from GitHub. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.installationId">installationId</a></code> | <code>string</code> | The installation identifier provided by GitHub Enterprise Server on the install callback. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.organizationName">organizationName</a></code> | <code>string</code> | The name of the GitHub organization to integrate with. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.state">state</a></code> | <code>string</code> | The CSRF state token for validating the OAuth flow. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.targetUrl">targetUrl</a></code> | <code>string</code> | The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

The OAuth authorization code received from GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `installationId`<sup>Optional</sup> <a name="installationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

The installation identifier provided by GitHub Enterprise Server on the install callback.

Required for GitHub Enterprise Server integrations and ignored for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

The name of the GitHub organization to integrate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#organization_name SecurityagentIntegration#organization_name}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The CSRF state token for validating the OAuth flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

### SecurityagentIntegrationProviderInputGitlab <a name="SecurityagentIntegrationProviderInputGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

const securityagentIntegrationProviderInputGitlab: securityagentIntegration.SecurityagentIntegrationProviderInputGitlab = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.accessToken">accessToken</a></code> | <code>string</code> | The GitLab access token used to authenticate. This can be a personal access token or a group access token. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.groupId">groupId</a></code> | <code>string</code> | The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.targetUrl">targetUrl</a></code> | <code>string</code> | The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com). |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.tokenType">tokenType</a></code> | <code>string</code> | The type of GitLab access token. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

The GitLab access token used to authenticate. This can be a personal access token or a group access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#access_token SecurityagentIntegration#access_token}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#group_id SecurityagentIntegration#group_id}

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#token_type SecurityagentIntegration#token_type}

---

### SecurityagentIntegrationTags <a name="SecurityagentIntegrationTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

const securityagentIntegrationTags: securityagentIntegration.SecurityagentIntegrationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#key SecurityagentIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#value SecurityagentIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentIntegrationProviderInputBitbucketOutputReference <a name="SecurityagentIntegrationProviderInputBitbucketOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

new securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetInstallationId">resetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetWorkspace">resetWorkspace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetInstallationId` <a name="resetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetInstallationId"></a>

```typescript
public resetInstallationId(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetWorkspace` <a name="resetWorkspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetWorkspace"></a>

```typescript
public resetWorkspace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationIdInput">installationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspaceInput">workspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId">installationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `installationIdInput`<sup>Optional</sup> <a name="installationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationIdInput"></a>

```typescript
public readonly installationIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspaceInput"></a>

```typescript
public readonly workspaceInput: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentIntegrationProviderInputBitbucket;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---


### SecurityagentIntegrationProviderInputConfluenceOutputReference <a name="SecurityagentIntegrationProviderInputConfluenceOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

new securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetInstallationId">resetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetSiteUrl">resetSiteUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetInstallationId` <a name="resetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetInstallationId"></a>

```typescript
public resetInstallationId(): void
```

##### `resetSiteUrl` <a name="resetSiteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetSiteUrl"></a>

```typescript
public resetSiteUrl(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationIdInput">installationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrlInput">siteUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId">installationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl">siteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `installationIdInput`<sup>Optional</sup> <a name="installationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationIdInput"></a>

```typescript
public readonly installationIdInput: string;
```

- *Type:* string

---

##### `siteUrlInput`<sup>Optional</sup> <a name="siteUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrlInput"></a>

```typescript
public readonly siteUrlInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

---

##### `siteUrl`<sup>Required</sup> <a name="siteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl"></a>

```typescript
public readonly siteUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentIntegrationProviderInputConfluence;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---


### SecurityagentIntegrationProviderInputGithubOutputReference <a name="SecurityagentIntegrationProviderInputGithubOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

new securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetInstallationId">resetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetTargetUrl">resetTargetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetInstallationId` <a name="resetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetInstallationId"></a>

```typescript
public resetInstallationId(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetUrl` <a name="resetTargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetTargetUrl"></a>

```typescript
public resetTargetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationIdInput">installationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrlInput">targetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationId">installationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `installationIdInput`<sup>Optional</sup> <a name="installationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationIdInput"></a>

```typescript
public readonly installationIdInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetUrlInput`<sup>Optional</sup> <a name="targetUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrlInput"></a>

```typescript
public readonly targetUrlInput: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentIntegrationProviderInputGithub;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---


### SecurityagentIntegrationProviderInputGitlabOutputReference <a name="SecurityagentIntegrationProviderInputGitlabOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

new securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTargetUrl">resetTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetTargetUrl` <a name="resetTargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTargetUrl"></a>

```typescript
public resetTargetUrl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTokenType"></a>

```typescript
public resetTokenType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrlInput">targetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `targetUrlInput`<sup>Optional</sup> <a name="targetUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrlInput"></a>

```typescript
public readonly targetUrlInput: string;
```

- *Type:* string

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentIntegrationProviderInputGitlab;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---


### SecurityagentIntegrationProviderInputOutputReference <a name="SecurityagentIntegrationProviderInputOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

new securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket">putBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence">putConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab">putGitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetBitbucket">resetBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetConfluence">resetConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGitlab">resetGitlab</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBitbucket` <a name="putBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket"></a>

```typescript
public putBitbucket(value: SecurityagentIntegrationProviderInputBitbucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---

##### `putConfluence` <a name="putConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence"></a>

```typescript
public putConfluence(value: SecurityagentIntegrationProviderInputConfluence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---

##### `putGithub` <a name="putGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub"></a>

```typescript
public putGithub(value: SecurityagentIntegrationProviderInputGithub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---

##### `putGitlab` <a name="putGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab"></a>

```typescript
public putGitlab(value: SecurityagentIntegrationProviderInputGitlab): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---

##### `resetBitbucket` <a name="resetBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetBitbucket"></a>

```typescript
public resetBitbucket(): void
```

##### `resetConfluence` <a name="resetConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetConfluence"></a>

```typescript
public resetConfluence(): void
```

##### `resetGithub` <a name="resetGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGithub"></a>

```typescript
public resetGithub(): void
```

##### `resetGitlab` <a name="resetGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGitlab"></a>

```typescript
public resetGitlab(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference">SecurityagentIntegrationProviderInputBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluence">confluence</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference">SecurityagentIntegrationProviderInputConfluenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference">SecurityagentIntegrationProviderInputGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlab">gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference">SecurityagentIntegrationProviderInputGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucketInput">bitbucketInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluenceInput">confluenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.githubInput">githubInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlabInput">gitlabInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitbucket`<sup>Required</sup> <a name="bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucket"></a>

```typescript
public readonly bitbucket: SecurityagentIntegrationProviderInputBitbucketOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference">SecurityagentIntegrationProviderInputBitbucketOutputReference</a>

---

##### `confluence`<sup>Required</sup> <a name="confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluence"></a>

```typescript
public readonly confluence: SecurityagentIntegrationProviderInputConfluenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference">SecurityagentIntegrationProviderInputConfluenceOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.github"></a>

```typescript
public readonly github: SecurityagentIntegrationProviderInputGithubOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference">SecurityagentIntegrationProviderInputGithubOutputReference</a>

---

##### `gitlab`<sup>Required</sup> <a name="gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlab"></a>

```typescript
public readonly gitlab: SecurityagentIntegrationProviderInputGitlabOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference">SecurityagentIntegrationProviderInputGitlabOutputReference</a>

---

##### `bitbucketInput`<sup>Optional</sup> <a name="bitbucketInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucketInput"></a>

```typescript
public readonly bitbucketInput: IResolvable | SecurityagentIntegrationProviderInputBitbucket;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---

##### `confluenceInput`<sup>Optional</sup> <a name="confluenceInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluenceInput"></a>

```typescript
public readonly confluenceInput: IResolvable | SecurityagentIntegrationProviderInputConfluence;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.githubInput"></a>

```typescript
public readonly githubInput: IResolvable | SecurityagentIntegrationProviderInputGithub;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---

##### `gitlabInput`<sup>Optional</sup> <a name="gitlabInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlabInput"></a>

```typescript
public readonly gitlabInput: IResolvable | SecurityagentIntegrationProviderInputGitlab;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentIntegrationProviderInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---


### SecurityagentIntegrationTagsList <a name="SecurityagentIntegrationTagsList" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

new securityagentIntegration.SecurityagentIntegrationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get"></a>

```typescript
public get(index: number): SecurityagentIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]

---


### SecurityagentIntegrationTagsOutputReference <a name="SecurityagentIntegrationTagsOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer"></a>

```typescript
import { securityagentIntegration } from '@cdktn/provider-awscc'

new securityagentIntegration.SecurityagentIntegrationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentIntegrationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>

---



