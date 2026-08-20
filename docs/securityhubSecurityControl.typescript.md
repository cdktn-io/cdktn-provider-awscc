# `securityhubSecurityControl` Submodule <a name="`securityhubSecurityControl` Submodule" id="@cdktn/provider-awscc.securityhubSecurityControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubSecurityControl <a name="SecurityhubSecurityControl" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control awscc_securityhub_security_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

new securityhubSecurityControl.SecurityhubSecurityControl(scope: Construct, id: string, config: SecurityhubSecurityControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig">SecurityhubSecurityControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig">SecurityhubSecurityControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason">resetLastUpdateReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn">resetSecurityControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId">resetSecurityControlId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters"></a>

```typescript
public putParameters(value: IResolvable | {[ key: string ]: SecurityhubSecurityControlParameters}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>}

---

##### `resetLastUpdateReason` <a name="resetLastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason"></a>

```typescript
public resetLastUpdateReason(): void
```

##### `resetSecurityControlArn` <a name="resetSecurityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn"></a>

```typescript
public resetSecurityControlArn(): void
```

##### `resetSecurityControlId` <a name="resetSecurityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId"></a>

```typescript
public resetSecurityControlId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

securityhubSecurityControl.SecurityhubSecurityControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubSecurityControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubSecurityControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubSecurityControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput">lastUpdateReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput">securityControlArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput">securityControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason">lastUpdateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn">securityControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId">securityControlId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters"></a>

```typescript
public readonly parameters: SecurityhubSecurityControlParametersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a>

---

##### `lastUpdateReasonInput`<sup>Optional</sup> <a name="lastUpdateReasonInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput"></a>

```typescript
public readonly lastUpdateReasonInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | {[ key: string ]: SecurityhubSecurityControlParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>}

---

##### `securityControlArnInput`<sup>Optional</sup> <a name="securityControlArnInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput"></a>

```typescript
public readonly securityControlArnInput: string;
```

- *Type:* string

---

##### `securityControlIdInput`<sup>Optional</sup> <a name="securityControlIdInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput"></a>

```typescript
public readonly securityControlIdInput: string;
```

- *Type:* string

---

##### `lastUpdateReason`<sup>Required</sup> <a name="lastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason"></a>

```typescript
public readonly lastUpdateReason: string;
```

- *Type:* string

---

##### `securityControlArn`<sup>Required</sup> <a name="securityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn"></a>

```typescript
public readonly securityControlArn: string;
```

- *Type:* string

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubSecurityControlConfig <a name="SecurityhubSecurityControlConfig" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.Initializer"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

const securityhubSecurityControlConfig: securityhubSecurityControl.SecurityhubSecurityControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>}</code> | An object that identifies the name of a control parameter, its current value, and whether it has been customized. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason">lastUpdateReason</a></code> | <code>string</code> | The most recent reason for updating the customizable properties of a security control. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn">securityControlArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId">securityControlId</a></code> | <code>string</code> | The unique identifier of a security control across standards. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | {[ key: string ]: SecurityhubSecurityControlParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>}

An object that identifies the name of a control parameter, its current value, and whether it has been customized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#parameters SecurityhubSecurityControl#parameters}

---

##### `lastUpdateReason`<sup>Optional</sup> <a name="lastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason"></a>

```typescript
public readonly lastUpdateReason: string;
```

- *Type:* string

The most recent reason for updating the customizable properties of a security control.

This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#last_update_reason SecurityhubSecurityControl#last_update_reason}

---

##### `securityControlArn`<sup>Optional</sup> <a name="securityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn"></a>

```typescript
public readonly securityControlArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#security_control_arn SecurityhubSecurityControl#security_control_arn}

---

##### `securityControlId`<sup>Optional</sup> <a name="securityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

The unique identifier of a security control across standards.

Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#security_control_id SecurityhubSecurityControl#security_control_id}

---

### SecurityhubSecurityControlParameters <a name="SecurityhubSecurityControlParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.Initializer"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

const securityhubSecurityControlParameters: securityhubSecurityControl.SecurityhubSecurityControlParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType">valueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value"></a>

```typescript
public readonly value: SecurityhubSecurityControlParametersValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}.

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}.

---

### SecurityhubSecurityControlParametersValue <a name="SecurityhubSecurityControlParametersValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.Initializer"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

const securityhubSecurityControlParametersValue: securityhubSecurityControl.SecurityhubSecurityControlParametersValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean">boolean</a></code> | <code>boolean \| cdktn.IResolvable</code> | A control parameter that is a boolean. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double">double</a></code> | <code>number</code> | A control parameter that is a double. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum">enum</a></code> | <code>string</code> | A control parameter that is a enum. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList">enumList</a></code> | <code>string[]</code> | A control parameter that is a list of enums. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer">integer</a></code> | <code>number</code> | A control parameter that is a integer. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList">integerList</a></code> | <code>number[]</code> | A control parameter that is a list of integers. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string">string</a></code> | <code>string</code> | A control parameter that is a string. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList">stringList</a></code> | <code>string[]</code> | A control parameter that is a list of strings. |

---

##### `boolean`<sup>Optional</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean"></a>

```typescript
public readonly boolean: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#boolean SecurityhubSecurityControl#boolean}

---

##### `double`<sup>Optional</sup> <a name="double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double"></a>

```typescript
public readonly double: number;
```

- *Type:* number

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#double SecurityhubSecurityControl#double}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum"></a>

```typescript
public readonly enum: string;
```

- *Type:* string

A control parameter that is a enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#enum SecurityhubSecurityControl#enum}

---

##### `enumList`<sup>Optional</sup> <a name="enumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList"></a>

```typescript
public readonly enumList: string[];
```

- *Type:* string[]

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#enum_list SecurityhubSecurityControl#enum_list}

---

##### `integer`<sup>Optional</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer"></a>

```typescript
public readonly integer: number;
```

- *Type:* number

A control parameter that is a integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#integer SecurityhubSecurityControl#integer}

---

##### `integerList`<sup>Optional</sup> <a name="integerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList"></a>

```typescript
public readonly integerList: number[];
```

- *Type:* number[]

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#integer_list SecurityhubSecurityControl#integer_list}

---

##### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string"></a>

```typescript
public readonly string: string;
```

- *Type:* string

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#string SecurityhubSecurityControl#string}

---

##### `stringList`<sup>Optional</sup> <a name="stringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList"></a>

```typescript
public readonly stringList: string[];
```

- *Type:* string[]

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#string_list SecurityhubSecurityControl#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubSecurityControlParametersMap <a name="SecurityhubSecurityControlParametersMap" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

new securityhubSecurityControl.SecurityhubSecurityControlParametersMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get"></a>

```typescript
public get(key: string): SecurityhubSecurityControlParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: SecurityhubSecurityControlParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>}

---


### SecurityhubSecurityControlParametersOutputReference <a name="SecurityhubSecurityControlParametersOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

new securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue"></a>

```typescript
public putValue(value: SecurityhubSecurityControlParametersValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType"></a>

```typescript
public resetValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value"></a>

```typescript
public readonly value: SecurityhubSecurityControlParametersValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | SecurityhubSecurityControlParametersValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubSecurityControlParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>

---


### SecurityhubSecurityControlParametersValueOutputReference <a name="SecurityhubSecurityControlParametersValueOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer"></a>

```typescript
import { securityhubSecurityControl } from '@cdktn/provider-awscc'

new securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean">resetBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble">resetDouble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList">resetEnumList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger">resetInteger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList">resetIntegerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString">resetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList">resetStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolean` <a name="resetBoolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean"></a>

```typescript
public resetBoolean(): void
```

##### `resetDouble` <a name="resetDouble" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble"></a>

```typescript
public resetDouble(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetEnumList` <a name="resetEnumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList"></a>

```typescript
public resetEnumList(): void
```

##### `resetInteger` <a name="resetInteger" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger"></a>

```typescript
public resetInteger(): void
```

##### `resetIntegerList` <a name="resetIntegerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList"></a>

```typescript
public resetIntegerList(): void
```

##### `resetString` <a name="resetString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString"></a>

```typescript
public resetString(): void
```

##### `resetStringList` <a name="resetStringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList"></a>

```typescript
public resetStringList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput">booleanInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput">doubleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput">enumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput">enumListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput">integerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput">integerListInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput">stringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput">stringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean">boolean</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double">double</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum">enum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList">enumList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer">integer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList">integerList</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string">string</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList">stringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanInput`<sup>Optional</sup> <a name="booleanInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput"></a>

```typescript
public readonly booleanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleInput`<sup>Optional</sup> <a name="doubleInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput"></a>

```typescript
public readonly doubleInput: number;
```

- *Type:* number

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput"></a>

```typescript
public readonly enumInput: string;
```

- *Type:* string

---

##### `enumListInput`<sup>Optional</sup> <a name="enumListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput"></a>

```typescript
public readonly enumListInput: string[];
```

- *Type:* string[]

---

##### `integerInput`<sup>Optional</sup> <a name="integerInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput"></a>

```typescript
public readonly integerInput: number;
```

- *Type:* number

---

##### `integerListInput`<sup>Optional</sup> <a name="integerListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput"></a>

```typescript
public readonly integerListInput: number[];
```

- *Type:* number[]

---

##### `stringInput`<sup>Optional</sup> <a name="stringInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput"></a>

```typescript
public readonly stringInput: string;
```

- *Type:* string

---

##### `stringListInput`<sup>Optional</sup> <a name="stringListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput"></a>

```typescript
public readonly stringListInput: string[];
```

- *Type:* string[]

---

##### `boolean`<sup>Required</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean"></a>

```typescript
public readonly boolean: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `double`<sup>Required</sup> <a name="double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double"></a>

```typescript
public readonly double: number;
```

- *Type:* number

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum"></a>

```typescript
public readonly enum: string;
```

- *Type:* string

---

##### `enumList`<sup>Required</sup> <a name="enumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList"></a>

```typescript
public readonly enumList: string[];
```

- *Type:* string[]

---

##### `integer`<sup>Required</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer"></a>

```typescript
public readonly integer: number;
```

- *Type:* number

---

##### `integerList`<sup>Required</sup> <a name="integerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList"></a>

```typescript
public readonly integerList: number[];
```

- *Type:* number[]

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string"></a>

```typescript
public readonly string: string;
```

- *Type:* string

---

##### `stringList`<sup>Required</sup> <a name="stringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList"></a>

```typescript
public readonly stringList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubSecurityControlParametersValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---



