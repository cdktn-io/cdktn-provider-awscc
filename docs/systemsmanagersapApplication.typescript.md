# `systemsmanagersapApplication` Submodule <a name="`systemsmanagersapApplication` Submodule" id="@cdktn/provider-awscc.systemsmanagersapApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemsmanagersapApplication <a name="SystemsmanagersapApplication" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application awscc_systemsmanagersap_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

new systemsmanagersapApplication.SystemsmanagersapApplication(scope: Construct, id: string, config: SystemsmanagersapApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig">SystemsmanagersapApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig">SystemsmanagersapApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo">putComponentsInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo">resetComponentsInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn">resetDatabaseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber">resetSapInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid">resetSid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentsInfo` <a name="putComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo"></a>

```typescript
public putComponentsInfo(value: IResolvable | SystemsmanagersapApplicationComponentsInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]

---

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials"></a>

```typescript
public putCredentials(value: IResolvable | SystemsmanagersapApplicationCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags"></a>

```typescript
public putTags(value: IResolvable | SystemsmanagersapApplicationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]

---

##### `resetComponentsInfo` <a name="resetComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo"></a>

```typescript
public resetComponentsInfo(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDatabaseArn` <a name="resetDatabaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn"></a>

```typescript
public resetDatabaseArn(): void
```

##### `resetInstances` <a name="resetInstances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances"></a>

```typescript
public resetInstances(): void
```

##### `resetSapInstanceNumber` <a name="resetSapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber"></a>

```typescript
public resetSapInstanceNumber(): void
```

##### `resetSid` <a name="resetSid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid"></a>

```typescript
public resetSid(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemsmanagersapApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemsmanagersapApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SystemsmanagersapApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo">componentsInfo</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput">applicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput">componentsInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput">credentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput">databaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput">instancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput">sapInstanceNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput">sidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn">databaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber">sapInstanceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid">sid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `componentsInfo`<sup>Required</sup> <a name="componentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo"></a>

```typescript
public readonly componentsInfo: SystemsmanagersapApplicationComponentsInfoList;
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials"></a>

```typescript
public readonly credentials: SystemsmanagersapApplicationCredentialsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags"></a>

```typescript
public readonly tags: SystemsmanagersapApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput"></a>

```typescript
public readonly applicationTypeInput: string;
```

- *Type:* string

---

##### `componentsInfoInput`<sup>Optional</sup> <a name="componentsInfoInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput"></a>

```typescript
public readonly componentsInfoInput: IResolvable | SystemsmanagersapApplicationComponentsInfo[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IResolvable | SystemsmanagersapApplicationCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]

---

##### `databaseArnInput`<sup>Optional</sup> <a name="databaseArnInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput"></a>

```typescript
public readonly databaseArnInput: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput"></a>

```typescript
public readonly instancesInput: string[];
```

- *Type:* string[]

---

##### `sapInstanceNumberInput`<sup>Optional</sup> <a name="sapInstanceNumberInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput"></a>

```typescript
public readonly sapInstanceNumberInput: string;
```

- *Type:* string

---

##### `sidInput`<sup>Optional</sup> <a name="sidInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput"></a>

```typescript
public readonly sidInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SystemsmanagersapApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `databaseArn`<sup>Required</sup> <a name="databaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn"></a>

```typescript
public readonly databaseArn: string;
```

- *Type:* string

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `sapInstanceNumber`<sup>Required</sup> <a name="sapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber"></a>

```typescript
public readonly sapInstanceNumber: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemsmanagersapApplicationComponentsInfo <a name="SystemsmanagersapApplicationComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

const systemsmanagersapApplicationComponentsInfo: systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType">componentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId">ec2InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid">sid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |

---

##### `componentType`<sup>Optional</sup> <a name="componentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType"></a>

```typescript
public readonly componentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}.

---

##### `ec2InstanceId`<sup>Optional</sup> <a name="ec2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId"></a>

```typescript
public readonly ec2InstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

### SystemsmanagersapApplicationConfig <a name="SystemsmanagersapApplicationConfig" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

const systemsmanagersapApplicationConfig: systemsmanagersapApplication.SystemsmanagersapApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType">applicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo">componentsInfo</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]</code> | This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials">credentials</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn">databaseArn</a></code> | <code>string</code> | The ARN of the SAP HANA database. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances">instances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber">sapInstanceNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid">sid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]</code> | The tags of a SystemsManagerSAP application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}.

---

##### `componentsInfo`<sup>Optional</sup> <a name="componentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo"></a>

```typescript
public readonly componentsInfo: IResolvable | SystemsmanagersapApplicationComponentsInfo[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]

This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#components_info SystemsmanagersapApplication#components_info}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials"></a>

```typescript
public readonly credentials: IResolvable | SystemsmanagersapApplicationCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}.

---

##### `databaseArn`<sup>Optional</sup> <a name="databaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn"></a>

```typescript
public readonly databaseArn: string;
```

- *Type:* string

The ARN of the SAP HANA database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#database_arn SystemsmanagersapApplication#database_arn}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}.

---

##### `sapInstanceNumber`<sup>Optional</sup> <a name="sapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber"></a>

```typescript
public readonly sapInstanceNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SystemsmanagersapApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]

The tags of a SystemsManagerSAP application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#tags SystemsmanagersapApplication#tags}

---

### SystemsmanagersapApplicationCredentials <a name="SystemsmanagersapApplicationCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

const systemsmanagersapApplicationCredentials: systemsmanagersapApplication.SystemsmanagersapApplicationCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}. |

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}.

---

### SystemsmanagersapApplicationTags <a name="SystemsmanagersapApplicationTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

const systemsmanagersapApplicationTags: systemsmanagersapApplication.SystemsmanagersapApplicationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#key SystemsmanagersapApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/systemsmanagersap_application#value SystemsmanagersapApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SystemsmanagersapApplicationComponentsInfoList <a name="SystemsmanagersapApplicationComponentsInfoList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

new systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get"></a>

```typescript
public get(index: number): SystemsmanagersapApplicationComponentsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemsmanagersapApplicationComponentsInfo[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]

---


### SystemsmanagersapApplicationComponentsInfoOutputReference <a name="SystemsmanagersapApplicationComponentsInfoOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

new systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType">resetComponentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId">resetEc2InstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid">resetSid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComponentType` <a name="resetComponentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType"></a>

```typescript
public resetComponentType(): void
```

##### `resetEc2InstanceId` <a name="resetEc2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId"></a>

```typescript
public resetEc2InstanceId(): void
```

##### `resetSid` <a name="resetSid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid"></a>

```typescript
public resetSid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput">componentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput">ec2InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput">sidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType">componentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId">ec2InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentTypeInput`<sup>Optional</sup> <a name="componentTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput"></a>

```typescript
public readonly componentTypeInput: string;
```

- *Type:* string

---

##### `ec2InstanceIdInput`<sup>Optional</sup> <a name="ec2InstanceIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput"></a>

```typescript
public readonly ec2InstanceIdInput: string;
```

- *Type:* string

---

##### `sidInput`<sup>Optional</sup> <a name="sidInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput"></a>

```typescript
public readonly sidInput: string;
```

- *Type:* string

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType"></a>

```typescript
public readonly componentType: string;
```

- *Type:* string

---

##### `ec2InstanceId`<sup>Required</sup> <a name="ec2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId"></a>

```typescript
public readonly ec2InstanceId: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemsmanagersapApplicationComponentsInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>

---


### SystemsmanagersapApplicationCredentialsList <a name="SystemsmanagersapApplicationCredentialsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

new systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get"></a>

```typescript
public get(index: number): SystemsmanagersapApplicationCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemsmanagersapApplicationCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]

---


### SystemsmanagersapApplicationCredentialsOutputReference <a name="SystemsmanagersapApplicationCredentialsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

new systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType"></a>

```typescript
public resetCredentialType(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemsmanagersapApplicationCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>

---


### SystemsmanagersapApplicationTagsList <a name="SystemsmanagersapApplicationTagsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

new systemsmanagersapApplication.SystemsmanagersapApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get"></a>

```typescript
public get(index: number): SystemsmanagersapApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemsmanagersapApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]

---


### SystemsmanagersapApplicationTagsOutputReference <a name="SystemsmanagersapApplicationTagsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer"></a>

```typescript
import { systemsmanagersapApplication } from '@cdktn/provider-awscc'

new systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemsmanagersapApplicationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>

---



