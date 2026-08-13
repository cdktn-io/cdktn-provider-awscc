# `ssoInstanceAccessControlAttributeConfiguration` Submodule <a name="`ssoInstanceAccessControlAttributeConfiguration` Submodule" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoInstanceAccessControlAttributeConfiguration <a name="SsoInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

new ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration(scope: Construct, id: string, config: SsoInstanceAccessControlAttributeConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig">SsoInstanceAccessControlAttributeConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig">SsoInstanceAccessControlAttributeConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes">putAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration">putInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetAccessControlAttributes">resetAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetInstanceAccessControlAttributeConfiguration">resetInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessControlAttributes` <a name="putAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes"></a>

```typescript
public putAccessControlAttributes(value: IResolvable | SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]

---

##### `putInstanceAccessControlAttributeConfiguration` <a name="putInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration"></a>

```typescript
public putInstanceAccessControlAttributeConfiguration(value: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---

##### `resetAccessControlAttributes` <a name="resetAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetAccessControlAttributes"></a>

```typescript
public resetAccessControlAttributes(): void
```

##### `resetInstanceAccessControlAttributeConfiguration` <a name="resetInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetInstanceAccessControlAttributeConfiguration"></a>

```typescript
public resetInstanceAccessControlAttributeConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoInstanceAccessControlAttributeConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoInstanceAccessControlAttributeConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsoInstanceAccessControlAttributeConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes">accessControlAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration">instanceAccessControlAttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributesInput">accessControlAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfigurationInput">instanceAccessControlAttributeConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessControlAttributes`<sup>Required</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

```typescript
public readonly accessControlAttributes: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="instanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly instanceAccessControlAttributeConfiguration: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a>

---

##### `accessControlAttributesInput`<sup>Optional</sup> <a name="accessControlAttributesInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributesInput"></a>

```typescript
public readonly accessControlAttributesInput: IResolvable | SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]

---

##### `instanceAccessControlAttributeConfigurationInput`<sup>Optional</sup> <a name="instanceAccessControlAttributeConfigurationInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfigurationInput"></a>

```typescript
public readonly instanceAccessControlAttributeConfigurationInput: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

const ssoInstanceAccessControlAttributeConfigurationAccessControlAttributes: ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value"></a>

```typescript
public readonly value: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}.

---

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

const ssoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue: ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source">source</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source"></a>

```typescript
public readonly source: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}.

---

### SsoInstanceAccessControlAttributeConfigurationConfig <a name="SsoInstanceAccessControlAttributeConfigurationConfig" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

const ssoInstanceAccessControlAttributeConfigurationConfig: ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The ARN of the AWS SSO instance under which the operation will be executed. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.accessControlAttributes">accessControlAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceAccessControlAttributeConfiguration">instanceAccessControlAttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The ARN of the AWS SSO instance under which the operation will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_arn SsoInstanceAccessControlAttributeConfiguration#instance_arn}

---

##### `accessControlAttributes`<sup>Optional</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.accessControlAttributes"></a>

```typescript
public readonly accessControlAttributes: IResolvable | SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}.

---

##### `instanceAccessControlAttributeConfiguration`<sup>Optional</sup> <a name="instanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceAccessControlAttributeConfiguration"></a>

```typescript
public readonly instanceAccessControlAttributeConfiguration: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes.

We recomend that you use  AccessControlAttributes property instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_access_control_attribute_configuration SsoInstanceAccessControlAttributeConfiguration#instance_access_control_attribute_configuration}

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

const ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration: ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.property.accessControlAttributes">accessControlAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}. |

---

##### `accessControlAttributes`<sup>Optional</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

```typescript
public readonly accessControlAttributes: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}.

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

const ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes: ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value"></a>

```typescript
public readonly value: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}.

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

const ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue: ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source">source</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source"></a>

```typescript
public readonly source: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

new ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```typescript
public get(index: number): SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]

---


### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

new ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue"></a>

```typescript
public putValue(value: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```typescript
public readonly value: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>

---


### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

new ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput">sourceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">source</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```typescript
public readonly source: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

new ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```typescript
public get(index: number): SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

new ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue"></a>

```typescript
public putValue(value: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```typescript
public readonly value: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

new ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput">sourceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">source</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```typescript
public readonly source: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer"></a>

```typescript
import { ssoInstanceAccessControlAttributeConfiguration } from '@cdktn/provider-awscc'

new ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes">putAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resetAccessControlAttributes">resetAccessControlAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessControlAttributes` <a name="putAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes"></a>

```typescript
public putAccessControlAttributes(value: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]

---

##### `resetAccessControlAttributes` <a name="resetAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resetAccessControlAttributes"></a>

```typescript
public resetAccessControlAttributes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes">accessControlAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributesInput">accessControlAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessControlAttributes`<sup>Required</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes"></a>

```typescript
public readonly accessControlAttributes: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `accessControlAttributesInput`<sup>Optional</sup> <a name="accessControlAttributesInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributesInput"></a>

```typescript
public readonly accessControlAttributesInput: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---



