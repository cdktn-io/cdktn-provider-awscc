# `ec2FcaPolicy` Submodule <a name="`ec2FcaPolicy` Submodule" id="@cdktn/provider-awscc.ec2FcaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FcaPolicy <a name="Ec2FcaPolicy" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy awscc_ec2_fca_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicy(scope: Construct, id: string, config: Ec2FcaPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig">Ec2FcaPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig">Ec2FcaPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument">putInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument">putNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument">putPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument">resetInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument">resetNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument">resetPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled">resetShowBackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceFcaPolicyDocument` <a name="putInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument"></a>

```typescript
public putInstanceFcaPolicyDocument(value: Ec2FcaPolicyInstanceFcaPolicyDocument): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---

##### `putNatFcaPolicyDocument` <a name="putNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument"></a>

```typescript
public putNatFcaPolicyDocument(value: Ec2FcaPolicyNatFcaPolicyDocument): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---

##### `putPcxFcaPolicyDocument` <a name="putPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument"></a>

```typescript
public putPcxFcaPolicyDocument(value: Ec2FcaPolicyPcxFcaPolicyDocument): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2FcaPolicyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInstanceFcaPolicyDocument` <a name="resetInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument"></a>

```typescript
public resetInstanceFcaPolicyDocument(): void
```

##### `resetNatFcaPolicyDocument` <a name="resetNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument"></a>

```typescript
public resetNatFcaPolicyDocument(): void
```

##### `resetPcxFcaPolicyDocument` <a name="resetPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument"></a>

```typescript
public resetPcxFcaPolicyDocument(): void
```

##### `resetShowBackEnabled` <a name="resetShowBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled"></a>

```typescript
public resetShowBackEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

ec2FcaPolicy.Ec2FcaPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2FcaPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2FcaPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FcaPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId">fcaPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument">instanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion">latestVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument">natFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument">pcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt">policyCreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt">versionExpectedEffectiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput">instanceFcaPolicyDocumentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput">natFcaPolicyDocumentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput">networkResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput">pcxFcaPolicyDocumentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput">showBackEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType">networkResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled">showBackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fcaPolicyId`<sup>Required</sup> <a name="fcaPolicyId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId"></a>

```typescript
public readonly fcaPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceFcaPolicyDocument`<sup>Required</sup> <a name="instanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument"></a>

```typescript
public readonly instanceFcaPolicyDocument: Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a>

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion"></a>

```typescript
public readonly latestVersion: number;
```

- *Type:* number

---

##### `natFcaPolicyDocument`<sup>Required</sup> <a name="natFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument"></a>

```typescript
public readonly natFcaPolicyDocument: Ec2FcaPolicyNatFcaPolicyDocumentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a>

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `pcxFcaPolicyDocument`<sup>Required</sup> <a name="pcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument"></a>

```typescript
public readonly pcxFcaPolicyDocument: Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a>

---

##### `policyCreatedAt`<sup>Required</sup> <a name="policyCreatedAt" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt"></a>

```typescript
public readonly policyCreatedAt: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags"></a>

```typescript
public readonly tags: Ec2FcaPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a>

---

##### `versionExpectedEffectiveAt`<sup>Required</sup> <a name="versionExpectedEffectiveAt" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt"></a>

```typescript
public readonly versionExpectedEffectiveAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceFcaPolicyDocumentInput`<sup>Optional</sup> <a name="instanceFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput"></a>

```typescript
public readonly instanceFcaPolicyDocumentInput: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocument;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---

##### `natFcaPolicyDocumentInput`<sup>Optional</sup> <a name="natFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput"></a>

```typescript
public readonly natFcaPolicyDocumentInput: IResolvable | Ec2FcaPolicyNatFcaPolicyDocument;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---

##### `networkResourceTypeInput`<sup>Optional</sup> <a name="networkResourceTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput"></a>

```typescript
public readonly networkResourceTypeInput: string;
```

- *Type:* string

---

##### `pcxFcaPolicyDocumentInput`<sup>Optional</sup> <a name="pcxFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput"></a>

```typescript
public readonly pcxFcaPolicyDocumentInput: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocument;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---

##### `showBackEnabledInput`<sup>Optional</sup> <a name="showBackEnabledInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput"></a>

```typescript
public readonly showBackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2FcaPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `networkResourceType`<sup>Required</sup> <a name="networkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType"></a>

```typescript
public readonly networkResourceType: string;
```

- *Type:* string

---

##### `showBackEnabled`<sup>Required</sup> <a name="showBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled"></a>

```typescript
public readonly showBackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FcaPolicyConfig <a name="Ec2FcaPolicyConfig" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyConfig: ec2FcaPolicy.Ec2FcaPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType">networkResourceType</a></code> | <code>string</code> | The type of network resource the FCA policy applies to. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description">description</a></code> | <code>string</code> | The description of the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument">instanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | The FCA policy document for EC2 instance cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument">natFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | The FCA policy document for NAT gateway cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument">pcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | The FCA policy document for VPC peering connection cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled">showBackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether show-back reporting is enabled for the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]</code> | The tags for the FCA policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `networkResourceType`<sup>Required</sup> <a name="networkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType"></a>

```typescript
public readonly networkResourceType: string;
```

- *Type:* string

The type of network resource the FCA policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#network_resource_type Ec2FcaPolicy#network_resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#description Ec2FcaPolicy#description}

---

##### `instanceFcaPolicyDocument`<sup>Optional</sup> <a name="instanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument"></a>

```typescript
public readonly instanceFcaPolicyDocument: Ec2FcaPolicyInstanceFcaPolicyDocument;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

The FCA policy document for EC2 instance cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#instance_fca_policy_document Ec2FcaPolicy#instance_fca_policy_document}

---

##### `natFcaPolicyDocument`<sup>Optional</sup> <a name="natFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument"></a>

```typescript
public readonly natFcaPolicyDocument: Ec2FcaPolicyNatFcaPolicyDocument;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

The FCA policy document for NAT gateway cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#nat_fca_policy_document Ec2FcaPolicy#nat_fca_policy_document}

---

##### `pcxFcaPolicyDocument`<sup>Optional</sup> <a name="pcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument"></a>

```typescript
public readonly pcxFcaPolicyDocument: Ec2FcaPolicyPcxFcaPolicyDocument;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

The FCA policy document for VPC peering connection cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#pcx_fca_policy_document Ec2FcaPolicy#pcx_fca_policy_document}

---

##### `showBackEnabled`<sup>Optional</sup> <a name="showBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled"></a>

```typescript
public readonly showBackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether show-back reporting is enabled for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#show_back_enabled Ec2FcaPolicy#show_back_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2FcaPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]

The tags for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#tags Ec2FcaPolicy#tags}

---

### Ec2FcaPolicyInstanceFcaPolicyDocument <a name="Ec2FcaPolicyInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyInstanceFcaPolicyDocument: ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>string[]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidrRangeSpecifications`<sup>Optional</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reportingGranularity`<sup>Optional</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications: ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixesType</a></code> | <code>string</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```typescript
public readonly prefixes: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixesType`<sup>Optional</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes: ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidrRange</a></code> | <code>string</code> | The CIDR range. |

---

##### `cidrLabel`<sup>Optional</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyNatFcaPolicyDocument <a name="Ec2FcaPolicyNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyNatFcaPolicyDocument: ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>string[]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidrRangeSpecifications`<sup>Optional</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reportingGranularity`<sup>Optional</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications: ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixesType</a></code> | <code>string</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```typescript
public readonly prefixes: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixesType`<sup>Optional</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes: ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidrRange</a></code> | <code>string</code> | The CIDR range. |

---

##### `cidrLabel`<sup>Optional</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyPcxFcaPolicyDocument <a name="Ec2FcaPolicyPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyPcxFcaPolicyDocument: ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>string[]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidrRangeSpecifications`<sup>Optional</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reportingGranularity`<sup>Optional</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications: ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixesType</a></code> | <code>string</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```typescript
public readonly prefixes: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixesType`<sup>Optional</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes: ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidrRange</a></code> | <code>string</code> | The CIDR range. |

---

##### `cidrLabel`<sup>Optional</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyTags <a name="Ec2FcaPolicyTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

const ec2FcaPolicyTags: ec2FcaPolicy.Ec2FcaPolicyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">putPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">resetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">resetPrefixesType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrefixes` <a name="putPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```typescript
public putPrefixes(value: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `resetPrefixes` <a name="resetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```typescript
public resetPrefixes(): void
```

##### `resetPrefixesType` <a name="resetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```typescript
public resetPrefixesType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```typescript
public readonly prefixes: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesInput`<sup>Optional</sup> <a name="prefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```typescript
public readonly prefixesInput: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `prefixesTypeInput`<sup>Optional</sup> <a name="prefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```typescript
public readonly prefixesTypeInput: string;
```

- *Type:* string

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```typescript
public get(index: number): Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">resetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">resetCidrRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrLabel` <a name="resetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```typescript
public resetCidrLabel(): void
```

##### `resetCidrRange` <a name="resetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```typescript
public resetCidrRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidrLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrLabelInput`<sup>Optional</sup> <a name="cidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```typescript
public readonly cidrLabelInput: string;
```

- *Type:* string

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```typescript
public readonly cidrRangeInput: string;
```

- *Type:* string

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">putCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">resetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity">resetReportingGranularity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrRangeSpecifications` <a name="putCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```typescript
public putCidrRangeSpecifications(value: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `resetCidrRangeSpecifications` <a name="resetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```typescript
public resetCidrRangeSpecifications(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetReportingGranularity` <a name="resetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```typescript
public resetReportingGranularity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidrRangeSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reportingGranularityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidrRangeSpecificationsInput`<sup>Optional</sup> <a name="cidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```typescript
public readonly cidrRangeSpecificationsInput: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: string[];
```

- *Type:* string[]

---

##### `reportingGranularityInput`<sup>Optional</sup> <a name="reportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```typescript
public readonly reportingGranularityInput: string[];
```

- *Type:* string[]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocument;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">putPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">resetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">resetPrefixesType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrefixes` <a name="putPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```typescript
public putPrefixes(value: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `resetPrefixes` <a name="resetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```typescript
public resetPrefixes(): void
```

##### `resetPrefixesType` <a name="resetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```typescript
public resetPrefixesType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```typescript
public readonly prefixes: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesInput`<sup>Optional</sup> <a name="prefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```typescript
public readonly prefixesInput: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `prefixesTypeInput`<sup>Optional</sup> <a name="prefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```typescript
public readonly prefixesTypeInput: string;
```

- *Type:* string

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```typescript
public get(index: number): Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">resetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">resetCidrRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrLabel` <a name="resetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```typescript
public resetCidrLabel(): void
```

##### `resetCidrRange` <a name="resetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```typescript
public resetCidrRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidrLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrLabelInput`<sup>Optional</sup> <a name="cidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```typescript
public readonly cidrLabelInput: string;
```

- *Type:* string

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```typescript
public readonly cidrRangeInput: string;
```

- *Type:* string

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">putCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">resetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity">resetReportingGranularity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrRangeSpecifications` <a name="putCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```typescript
public putCidrRangeSpecifications(value: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `resetCidrRangeSpecifications` <a name="resetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```typescript
public resetCidrRangeSpecifications(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetReportingGranularity` <a name="resetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```typescript
public resetReportingGranularity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidrRangeSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reportingGranularityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidrRangeSpecificationsInput`<sup>Optional</sup> <a name="cidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```typescript
public readonly cidrRangeSpecificationsInput: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: string[];
```

- *Type:* string[]

---

##### `reportingGranularityInput`<sup>Optional</sup> <a name="reportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```typescript
public readonly reportingGranularityInput: string[];
```

- *Type:* string[]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyNatFcaPolicyDocument;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">putPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">resetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">resetPrefixesType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrefixes` <a name="putPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```typescript
public putPrefixes(value: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `resetPrefixes` <a name="resetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```typescript
public resetPrefixes(): void
```

##### `resetPrefixesType` <a name="resetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```typescript
public resetPrefixesType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```typescript
public readonly prefixes: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesInput`<sup>Optional</sup> <a name="prefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```typescript
public readonly prefixesInput: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `prefixesTypeInput`<sup>Optional</sup> <a name="prefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```typescript
public readonly prefixesTypeInput: string;
```

- *Type:* string

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```typescript
public get(index: number): Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">resetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">resetCidrRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrLabel` <a name="resetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```typescript
public resetCidrLabel(): void
```

##### `resetCidrRange` <a name="resetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```typescript
public resetCidrRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidrLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrLabelInput`<sup>Optional</sup> <a name="cidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```typescript
public readonly cidrLabelInput: string;
```

- *Type:* string

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```typescript
public readonly cidrRangeInput: string;
```

- *Type:* string

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">putCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">resetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity">resetReportingGranularity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrRangeSpecifications` <a name="putCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```typescript
public putCidrRangeSpecifications(value: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `resetCidrRangeSpecifications` <a name="resetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```typescript
public resetCidrRangeSpecifications(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetReportingGranularity` <a name="resetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```typescript
public resetReportingGranularity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidrRangeSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reportingGranularityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidrRangeSpecificationsInput`<sup>Optional</sup> <a name="cidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```typescript
public readonly cidrRangeSpecificationsInput: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: string[];
```

- *Type:* string[]

---

##### `reportingGranularityInput`<sup>Optional</sup> <a name="reportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```typescript
public readonly reportingGranularityInput: string[];
```

- *Type:* string[]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocument;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---


### Ec2FcaPolicyTagsList <a name="Ec2FcaPolicyTagsList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get"></a>

```typescript
public get(index: number): Ec2FcaPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]

---


### Ec2FcaPolicyTagsOutputReference <a name="Ec2FcaPolicyTagsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer"></a>

```typescript
import { ec2FcaPolicy } from '@cdktn/provider-awscc'

new ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FcaPolicyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>

---



