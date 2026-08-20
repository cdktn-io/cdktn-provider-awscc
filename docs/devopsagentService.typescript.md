# `devopsagentService` Submodule <a name="`devopsagentService` Submodule" id="@cdktn/provider-awscc.devopsagentService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentService <a name="DevopsagentService" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service awscc_devopsagent_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentService(scope: Construct, id: string, config: DevopsagentServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig">DevopsagentServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig">DevopsagentServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails">putServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetExchangeUrlPrivateConnectionName">resetExchangeUrlPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetPrivateConnectionName">resetPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetServiceDetails">resetServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTargetUrlPrivateConnectionName">resetTargetUrlPrivateConnectionName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServiceDetails` <a name="putServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails"></a>

```typescript
public putServiceDetails(value: DevopsagentServiceServiceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags"></a>

```typescript
public putTags(value: IResolvable | DevopsagentServiceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>[]

---

##### `resetExchangeUrlPrivateConnectionName` <a name="resetExchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetExchangeUrlPrivateConnectionName"></a>

```typescript
public resetExchangeUrlPrivateConnectionName(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetPrivateConnectionName` <a name="resetPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetPrivateConnectionName"></a>

```typescript
public resetPrivateConnectionName(): void
```

##### `resetServiceDetails` <a name="resetServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetServiceDetails"></a>

```typescript
public resetServiceDetails(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetUrlPrivateConnectionName` <a name="resetTargetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTargetUrlPrivateConnectionName"></a>

```typescript
public resetTargetUrlPrivateConnectionName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

devopsagentService.DevopsagentService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

devopsagentService.DevopsagentService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

devopsagentService.DevopsagentService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

devopsagentService.DevopsagentService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.accessibleResources">accessibleResources</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.additionalServiceDetails">additionalServiceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference">DevopsagentServiceAdditionalServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetails">serviceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference">DevopsagentServiceServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList">DevopsagentServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionNameInput">exchangeUrlPrivateConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionNameInput">privateConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetailsInput">serviceDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionNameInput">targetUrlPrivateConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionName">exchangeUrlPrivateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionName">targetUrlPrivateConnectionName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessibleResources`<sup>Required</sup> <a name="accessibleResources" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.accessibleResources"></a>

```typescript
public readonly accessibleResources: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `additionalServiceDetails`<sup>Required</sup> <a name="additionalServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.additionalServiceDetails"></a>

```typescript
public readonly additionalServiceDetails: DevopsagentServiceAdditionalServiceDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference">DevopsagentServiceAdditionalServiceDetailsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceDetails`<sup>Required</sup> <a name="serviceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetails"></a>

```typescript
public readonly serviceDetails: DevopsagentServiceServiceDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference">DevopsagentServiceServiceDetailsOutputReference</a>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tags"></a>

```typescript
public readonly tags: DevopsagentServiceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList">DevopsagentServiceTagsList</a>

---

##### `exchangeUrlPrivateConnectionNameInput`<sup>Optional</sup> <a name="exchangeUrlPrivateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionNameInput"></a>

```typescript
public readonly exchangeUrlPrivateConnectionNameInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `privateConnectionNameInput`<sup>Optional</sup> <a name="privateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionNameInput"></a>

```typescript
public readonly privateConnectionNameInput: string;
```

- *Type:* string

---

##### `serviceDetailsInput`<sup>Optional</sup> <a name="serviceDetailsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetailsInput"></a>

```typescript
public readonly serviceDetailsInput: IResolvable | DevopsagentServiceServiceDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DevopsagentServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>[]

---

##### `targetUrlPrivateConnectionNameInput`<sup>Optional</sup> <a name="targetUrlPrivateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionNameInput"></a>

```typescript
public readonly targetUrlPrivateConnectionNameInput: string;
```

- *Type:* string

---

##### `exchangeUrlPrivateConnectionName`<sup>Required</sup> <a name="exchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionName"></a>

```typescript
public readonly exchangeUrlPrivateConnectionName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `targetUrlPrivateConnectionName`<sup>Required</sup> <a name="targetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionName"></a>

```typescript
public readonly targetUrlPrivateConnectionName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentServiceAdditionalServiceDetails <a name="DevopsagentServiceAdditionalServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetails: devopsagentService.DevopsagentServiceAdditionalServiceDetails = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsAzureIdentity <a name="DevopsagentServiceAdditionalServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsAzureIdentity: devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsDynatrace <a name="DevopsagentServiceAdditionalServiceDetailsDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsDynatrace: devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsGitLab <a name="DevopsagentServiceAdditionalServiceDetailsGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsGitLab: devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsMcpServer <a name="DevopsagentServiceAdditionalServiceDetailsMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsMcpServer: devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsMcpServerGrafana: devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsMcpServerNewRelic: devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsMcpServerSigV4: devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsMcpServerSplunk: devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsPagerDuty <a name="DevopsagentServiceAdditionalServiceDetailsPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsPagerDuty: devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty = { ... }
```


### DevopsagentServiceAdditionalServiceDetailsServiceNow <a name="DevopsagentServiceAdditionalServiceDetailsServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceAdditionalServiceDetailsServiceNow: devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow = { ... }
```


### DevopsagentServiceConfig <a name="DevopsagentServiceConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceConfig: devopsagentService.DevopsagentServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceType">serviceType</a></code> | <code>string</code> | The type of service being registered. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.exchangeUrlPrivateConnectionName">exchangeUrlPrivateConnectionName</a></code> | <code>string</code> | The name of the private connection to use for OAuth token exchange requests only. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | The name of the private connection to use for VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceDetails">serviceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | Service-specific configuration details for create operation. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.targetUrlPrivateConnectionName">targetUrlPrivateConnectionName</a></code> | <code>string</code> | The name of the private connection to use for API calls (target URL) only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

The type of service being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#service_type DevopsagentService#service_type}

---

##### `exchangeUrlPrivateConnectionName`<sup>Optional</sup> <a name="exchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.exchangeUrlPrivateConnectionName"></a>

```typescript
public readonly exchangeUrlPrivateConnectionName: string;
```

- *Type:* string

The name of the private connection to use for OAuth token exchange requests only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_url_private_connection_name DevopsagentService#exchange_url_private_connection_name}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#kms_key_arn DevopsagentService#kms_key_arn}

---

##### `privateConnectionName`<sup>Optional</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

The name of the private connection to use for VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#private_connection_name DevopsagentService#private_connection_name}

---

##### `serviceDetails`<sup>Optional</sup> <a name="serviceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceDetails"></a>

```typescript
public readonly serviceDetails: DevopsagentServiceServiceDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

Service-specific configuration details for create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#service_details DevopsagentService#service_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DevopsagentServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#tags DevopsagentService#tags}

---

##### `targetUrlPrivateConnectionName`<sup>Optional</sup> <a name="targetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.targetUrlPrivateConnectionName"></a>

```typescript
public readonly targetUrlPrivateConnectionName: string;
```

- *Type:* string

The name of the private connection to use for API calls (target URL) only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#target_url_private_connection_name DevopsagentService#target_url_private_connection_name}

---

### DevopsagentServiceServiceDetails <a name="DevopsagentServiceServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetails: devopsagentService.DevopsagentServiceServiceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.azureIdentity">azureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | Azure Identity service configuration for federated identity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | Dynatrace service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | GitLab service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | New Relic service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | PagerDuty service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | ServiceNow service configuration. |

---

##### `azureIdentity`<sup>Optional</sup> <a name="azureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.azureIdentity"></a>

```typescript
public readonly azureIdentity: DevopsagentServiceServiceDetailsAzureIdentity;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

Azure Identity service configuration for federated identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#azure_identity DevopsagentService#azure_identity}

---

##### `dynatrace`<sup>Optional</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.dynatrace"></a>

```typescript
public readonly dynatrace: DevopsagentServiceServiceDetailsDynatrace;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

Dynatrace service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#dynatrace DevopsagentService#dynatrace}

---

##### `gitLab`<sup>Optional</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.gitLab"></a>

```typescript
public readonly gitLab: DevopsagentServiceServiceDetailsGitLab;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

GitLab service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#git_lab DevopsagentService#git_lab}

---

##### `mcpServer`<sup>Optional</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServer"></a>

```typescript
public readonly mcpServer: DevopsagentServiceServiceDetailsMcpServer;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server DevopsagentService#mcp_server}

---

##### `mcpServerGrafana`<sup>Optional</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerGrafana"></a>

```typescript
public readonly mcpServerGrafana: DevopsagentServiceServiceDetailsMcpServerGrafana;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server_grafana DevopsagentService#mcp_server_grafana}

---

##### `mcpServerNewRelic`<sup>Optional</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerNewRelic"></a>

```typescript
public readonly mcpServerNewRelic: DevopsagentServiceServiceDetailsMcpServerNewRelic;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

New Relic service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server_new_relic DevopsagentService#mcp_server_new_relic}

---

##### `mcpServerSigV4`<sup>Optional</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSigV4"></a>

```typescript
public readonly mcpServerSigV4: DevopsagentServiceServiceDetailsMcpServerSigV4;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server_sig_v4 DevopsagentService#mcp_server_sig_v4}

---

##### `mcpServerSplunk`<sup>Optional</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSplunk"></a>

```typescript
public readonly mcpServerSplunk: DevopsagentServiceServiceDetailsMcpServerSplunk;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server_splunk DevopsagentService#mcp_server_splunk}

---

##### `pagerDuty`<sup>Optional</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.pagerDuty"></a>

```typescript
public readonly pagerDuty: DevopsagentServiceServiceDetailsPagerDuty;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

PagerDuty service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#pager_duty DevopsagentService#pager_duty}

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.serviceNow"></a>

```typescript
public readonly serviceNow: DevopsagentServiceServiceDetailsServiceNow;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

ServiceNow service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#service_now DevopsagentService#service_now}

---

### DevopsagentServiceServiceDetailsAzureIdentity <a name="DevopsagentServiceServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsAzureIdentity: devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.clientId">clientId</a></code> | <code>string</code> | Azure AD application client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.tenantId">tenantId</a></code> | <code>string</code> | Azure AD tenant ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityRoleArn">webIdentityRoleArn</a></code> | <code>string</code> | ARN of the IAM role for web identity token exchange. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityTokenAudiences">webIdentityTokenAudiences</a></code> | <code>string[]</code> | List of audiences for the web identity token. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Azure AD application client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Azure AD tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#tenant_id DevopsagentService#tenant_id}

---

##### `webIdentityRoleArn`<sup>Optional</sup> <a name="webIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityRoleArn"></a>

```typescript
public readonly webIdentityRoleArn: string;
```

- *Type:* string

ARN of the IAM role for web identity token exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#web_identity_role_arn DevopsagentService#web_identity_role_arn}

---

##### `webIdentityTokenAudiences`<sup>Optional</sup> <a name="webIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityTokenAudiences"></a>

```typescript
public readonly webIdentityTokenAudiences: string[];
```

- *Type:* string[]

List of audiences for the web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#web_identity_token_audiences DevopsagentService#web_identity_token_audiences}

---

### DevopsagentServiceServiceDetailsDynatrace <a name="DevopsagentServiceServiceDetailsDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsDynatrace: devopsagentService.DevopsagentServiceServiceDetailsDynatrace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.accountUrn">accountUrn</a></code> | <code>string</code> | Dynatrace resource account URN. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | Dynatrace OAuth authorization configuration. |

---

##### `accountUrn`<sup>Optional</sup> <a name="accountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.accountUrn"></a>

```typescript
public readonly accountUrn: string;
```

- *Type:* string

Dynatrace resource account URN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#account_urn DevopsagentService#account_urn}

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

Dynatrace OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsDynatraceAuthorizationConfig: devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `oAuthClientCredentials`<sup>Optional</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.property.oAuthClientCredentials"></a>

```typescript
public readonly oAuthClientCredentials: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials: devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientId">clientId</a></code> | <code>string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientName">clientName</a></code> | <code>string</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchangeParameters</a></code> | <code>string</code> | OAuth token exchange parameters. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchangeParameters`<sup>Optional</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```typescript
public readonly exchangeParameters: string;
```

- *Type:* string

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceServiceDetailsGitLab <a name="DevopsagentServiceServiceDetailsGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsGitLab: devopsagentService.DevopsagentServiceServiceDetailsGitLab = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.groupId">groupId</a></code> | <code>string</code> | Optional GitLab group ID for group-level access tokens. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.targetUrl">targetUrl</a></code> | <code>string</code> | GitLab instance URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenType">tokenType</a></code> | <code>string</code> | Type of GitLab access token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenValue">tokenValue</a></code> | <code>string</code> | GitLab access token value. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Optional GitLab group ID for group-level access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#group_id DevopsagentService#group_id}

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

GitLab instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#target_url DevopsagentService#target_url}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

Type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_type DevopsagentService#token_type}

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

GitLab access token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServer <a name="DevopsagentServiceServiceDetailsMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServer: devopsagentService.DevopsagentServiceServiceDetailsMcpServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | MCP server authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.description">description</a></code> | <code>string</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.name">name</a></code> | <code>string</code> | MCP server name. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerAuthorizationConfig: devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | API key authentication details. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | MCP server OAuth client credentials configuration. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.apiKey"></a>

```typescript
public readonly apiKey: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

API key authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.bearerToken"></a>

```typescript
public readonly bearerToken: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

##### `oAuthClientCredentials`<sup>Optional</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.oAuthClientCredentials"></a>

```typescript
public readonly oAuthClientCredentials: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

MCP server OAuth client credentials configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey: devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyHeader">apiKeyHeader</a></code> | <code>string</code> | HTTP header name to send the API key. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyName">apiKeyName</a></code> | <code>string</code> | User friendly API key name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyValue">apiKeyValue</a></code> | <code>string</code> | API key value. |

---

##### `apiKeyHeader`<sup>Optional</sup> <a name="apiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyHeader"></a>

```typescript
public readonly apiKeyHeader: string;
```

- *Type:* string

HTTP header name to send the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key_header DevopsagentService#api_key_header}

---

##### `apiKeyName`<sup>Optional</sup> <a name="apiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyName"></a>

```typescript
public readonly apiKeyName: string;
```

- *Type:* string

User friendly API key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key_name DevopsagentService#api_key_name}

---

##### `apiKeyValue`<sup>Optional</sup> <a name="apiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyValue"></a>

```typescript
public readonly apiKeyValue: string;
```

- *Type:* string

API key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key_value DevopsagentService#api_key_value}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken: devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.authorizationHeader">authorizationHeader</a></code> | <code>string</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenName">tokenName</a></code> | <code>string</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenValue">tokenValue</a></code> | <code>string</code> | Bearer token value. |

---

##### `authorizationHeader`<sup>Optional</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```typescript
public readonly authorizationHeader: string;
```

- *Type:* string

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials: devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientId">clientId</a></code> | <code>string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientName">clientName</a></code> | <code>string</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchangeParameters</a></code> | <code>string</code> | OAuth token exchange parameters. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeUrl">exchangeUrl</a></code> | <code>string</code> | OAuth token exchange URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.scopes">scopes</a></code> | <code>string[]</code> | OAuth scopes. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchangeParameters`<sup>Optional</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```typescript
public readonly exchangeParameters: string;
```

- *Type:* string

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

##### `exchangeUrl`<sup>Optional</sup> <a name="exchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeUrl"></a>

```typescript
public readonly exchangeUrl: string;
```

- *Type:* string

OAuth token exchange URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_url DevopsagentService#exchange_url}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

OAuth scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

### DevopsagentServiceServiceDetailsMcpServerGrafana <a name="DevopsagentServiceServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerGrafana: devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | Grafana MCP server authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.description">description</a></code> | <code>string</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.name">name</a></code> | <code>string</code> | MCP server name. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

Grafana MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig: devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.property.bearerToken"></a>

```typescript
public readonly bearerToken: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken: devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.authorizationHeader">authorizationHeader</a></code> | <code>string</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenName">tokenName</a></code> | <code>string</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenValue">tokenValue</a></code> | <code>string</code> | Bearer token value. |

---

##### `authorizationHeader`<sup>Optional</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```typescript
public readonly authorizationHeader: string;
```

- *Type:* string

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelic <a name="DevopsagentServiceServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerNewRelic: devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | New Relic authorization configuration. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

New Relic authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig: devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | New Relic API key configuration. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.property.apiKey"></a>

```typescript
public readonly apiKey: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

New Relic API key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey: devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.accountId">accountId</a></code> | <code>string</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.alertPolicyIds">alertPolicyIds</a></code> | <code>string[]</code> | List of alert policy IDs. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.apiKey">apiKey</a></code> | <code>string</code> | New Relic User API Key. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.applicationIds">applicationIds</a></code> | <code>string[]</code> | List of monitored APM application IDs. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.entityGuids">entityGuids</a></code> | <code>string[]</code> | List of globally unique IDs for New Relic resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.region">region</a></code> | <code>string</code> | New Relic region. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#account_id DevopsagentService#account_id}

---

##### `alertPolicyIds`<sup>Optional</sup> <a name="alertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.alertPolicyIds"></a>

```typescript
public readonly alertPolicyIds: string[];
```

- *Type:* string[]

List of alert policy IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#alert_policy_ids DevopsagentService#alert_policy_ids}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

New Relic User API Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `applicationIds`<sup>Optional</sup> <a name="applicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.applicationIds"></a>

```typescript
public readonly applicationIds: string[];
```

- *Type:* string[]

List of monitored APM application IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#application_ids DevopsagentService#application_ids}

---

##### `entityGuids`<sup>Optional</sup> <a name="entityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.entityGuids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* string[]

List of globally unique IDs for New Relic resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#entity_guids DevopsagentService#entity_guids}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

New Relic region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

### DevopsagentServiceServiceDetailsMcpServerSigV4 <a name="DevopsagentServiceServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerSigV4: devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | SigV4 authorization configuration for MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.description">description</a></code> | <code>string</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.name">name</a></code> | <code>string</code> | MCP server name. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

SigV4 authorization configuration for MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig: devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.customHeaders">customHeaders</a></code> | <code>{[ key: string ]: string}</code> | Custom headers for the SigV4 MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.mcpRoleArn">mcpRoleArn</a></code> | <code>string</code> | IAM role ARN to assume for SigV4 signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.region">region</a></code> | <code>string</code> | AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.service">service</a></code> | <code>string</code> | AWS service name for SigV4 signing. |

---

##### `customHeaders`<sup>Optional</sup> <a name="customHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.customHeaders"></a>

```typescript
public readonly customHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom headers for the SigV4 MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#custom_headers DevopsagentService#custom_headers}

---

##### `mcpRoleArn`<sup>Optional</sup> <a name="mcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.mcpRoleArn"></a>

```typescript
public readonly mcpRoleArn: string;
```

- *Type:* string

IAM role ARN to assume for SigV4 signing.

Optional - when omitted, credentials are resolved at runtime via a monitor account association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_role_arn DevopsagentService#mcp_role_arn}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#role_arn DevopsagentService#role_arn}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

AWS service name for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#service DevopsagentService#service}

---

### DevopsagentServiceServiceDetailsMcpServerSplunk <a name="DevopsagentServiceServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerSplunk: devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | MCP server splunk authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.description">description</a></code> | <code>string</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.name">name</a></code> | <code>string</code> | MCP server name. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

MCP server splunk authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig: devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.property.bearerToken"></a>

```typescript
public readonly bearerToken: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken: devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.authorizationHeader">authorizationHeader</a></code> | <code>string</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenName">tokenName</a></code> | <code>string</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenValue">tokenValue</a></code> | <code>string</code> | Bearer token value. |

---

##### `authorizationHeader`<sup>Optional</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```typescript
public readonly authorizationHeader: string;
```

- *Type:* string

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsPagerDuty <a name="DevopsagentServiceServiceDetailsPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsPagerDuty: devopsagentService.DevopsagentServiceServiceDetailsPagerDuty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | PagerDuty OAuth authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.scopes">scopes</a></code> | <code>string[]</code> | PagerDuty scopes. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

PagerDuty OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

PagerDuty scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsPagerDutyAuthorizationConfig: devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `oAuthClientCredentials`<sup>Optional</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.property.oAuthClientCredentials"></a>

```typescript
public readonly oAuthClientCredentials: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials: devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientId">clientId</a></code> | <code>string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientName">clientName</a></code> | <code>string</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchangeParameters</a></code> | <code>string</code> | OAuth token exchange parameters. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchangeParameters`<sup>Optional</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```typescript
public readonly exchangeParameters: string;
```

- *Type:* string

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceServiceDetailsServiceNow <a name="DevopsagentServiceServiceDetailsServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsServiceNow: devopsagentService.DevopsagentServiceServiceDetailsServiceNow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | ServiceNow OAuth authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | ServiceNow instance URL. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

ServiceNow OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `instanceUrl`<sup>Optional</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

ServiceNow instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#instance_url DevopsagentService#instance_url}

---

### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsServiceNowAuthorizationConfig: devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `oAuthClientCredentials`<sup>Optional</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.property.oAuthClientCredentials"></a>

```typescript
public readonly oAuthClientCredentials: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials: devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientId">clientId</a></code> | <code>string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientName">clientName</a></code> | <code>string</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchangeParameters</a></code> | <code>string</code> | OAuth token exchange parameters. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchangeParameters`<sup>Optional</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```typescript
public readonly exchangeParameters: string;
```

- *Type:* string

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceTags <a name="DevopsagentServiceTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

const devopsagentServiceTags: devopsagentService.DevopsagentServiceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#key DevopsagentService#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#value DevopsagentService#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">webIdentityRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">webIdentityTokenAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity">DevopsagentServiceAdditionalServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `webIdentityRoleArn`<sup>Required</sup> <a name="webIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```typescript
public readonly webIdentityRoleArn: string;
```

- *Type:* string

---

##### `webIdentityTokenAudiences`<sup>Required</sup> <a name="webIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```typescript
public readonly webIdentityTokenAudiences: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsAzureIdentity;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity">DevopsagentServiceAdditionalServiceDetailsAzureIdentity</a>

---


### DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn">accountUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace">DevopsagentServiceAdditionalServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountUrn`<sup>Required</sup> <a name="accountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```typescript
public readonly accountUrn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsDynatrace;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace">DevopsagentServiceAdditionalServiceDetailsDynatrace</a>

---


### DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab">DevopsagentServiceAdditionalServiceDetailsGitLab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsGitLab;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab">DevopsagentServiceAdditionalServiceDetailsGitLab</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod">authorizationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationMethod`<sup>Required</sup> <a name="authorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod"></a>

```typescript
public readonly authorizationMethod: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader">apiKeyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod">authorizationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer">DevopsagentServiceAdditionalServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyHeader`<sup>Required</sup> <a name="apiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader"></a>

```typescript
public readonly apiKeyHeader: string;
```

- *Type:* string

---

##### `authorizationMethod`<sup>Required</sup> <a name="authorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod"></a>

```typescript
public readonly authorizationMethod: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsMcpServer;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer">DevopsagentServiceAdditionalServiceDetailsMcpServer</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders">customHeaders</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn">mcpRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders"></a>

```typescript
public readonly customHeaders: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `mcpRoleArn`<sup>Required</sup> <a name="mcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn"></a>

```typescript
public readonly mcpRoleArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader">apiKeyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod">authorizationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyHeader`<sup>Required</sup> <a name="apiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader"></a>

```typescript
public readonly apiKeyHeader: string;
```

- *Type:* string

---

##### `authorizationMethod`<sup>Required</sup> <a name="authorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod"></a>

```typescript
public readonly authorizationMethod: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a>

---


### DevopsagentServiceAdditionalServiceDetailsOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity">azureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails">DevopsagentServiceAdditionalServiceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureIdentity`<sup>Required</sup> <a name="azureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity"></a>

```typescript
public readonly azureIdentity: DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace"></a>

```typescript
public readonly dynatrace: DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a>

---

##### `gitLab`<sup>Required</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab"></a>

```typescript
public readonly gitLab: DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer"></a>

```typescript
public readonly mcpServer: DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a>

---

##### `mcpServerGrafana`<sup>Required</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```typescript
public readonly mcpServerGrafana: DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `mcpServerNewRelic`<sup>Required</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```typescript
public readonly mcpServerNewRelic: DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `mcpServerSigV4`<sup>Required</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```typescript
public readonly mcpServerSigV4: DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `mcpServerSplunk`<sup>Required</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```typescript
public readonly mcpServerSplunk: DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `pagerDuty`<sup>Required</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty"></a>

```typescript
public readonly pagerDuty: DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails">DevopsagentServiceAdditionalServiceDetails</a>

---


### DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty">DevopsagentServiceAdditionalServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsPagerDuty;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty">DevopsagentServiceAdditionalServiceDetailsPagerDuty</a>

---


### DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow">DevopsagentServiceAdditionalServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsagentServiceAdditionalServiceDetailsServiceNow;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow">DevopsagentServiceAdditionalServiceDetailsServiceNow</a>

---


### DevopsagentServiceServiceDetailsAzureIdentityOutputReference <a name="DevopsagentServiceServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityRoleArn">resetWebIdentityRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityTokenAudiences">resetWebIdentityTokenAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetWebIdentityRoleArn` <a name="resetWebIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityRoleArn"></a>

```typescript
public resetWebIdentityRoleArn(): void
```

##### `resetWebIdentityTokenAudiences` <a name="resetWebIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityTokenAudiences"></a>

```typescript
public resetWebIdentityTokenAudiences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArnInput">webIdentityRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiencesInput">webIdentityTokenAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">webIdentityRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">webIdentityTokenAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `webIdentityRoleArnInput`<sup>Optional</sup> <a name="webIdentityRoleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArnInput"></a>

```typescript
public readonly webIdentityRoleArnInput: string;
```

- *Type:* string

---

##### `webIdentityTokenAudiencesInput`<sup>Optional</sup> <a name="webIdentityTokenAudiencesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiencesInput"></a>

```typescript
public readonly webIdentityTokenAudiencesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `webIdentityRoleArn`<sup>Required</sup> <a name="webIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```typescript
public readonly webIdentityRoleArn: string;
```

- *Type:* string

---

##### `webIdentityTokenAudiences`<sup>Required</sup> <a name="webIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```typescript
public readonly webIdentityTokenAudiences: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsAzureIdentity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---


### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">resetExchangeParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```typescript
public resetClientName(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetExchangeParameters` <a name="resetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```typescript
public resetExchangeParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">clientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchangeParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">clientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchangeParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```typescript
public readonly clientNameInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `exchangeParametersInput`<sup>Optional</sup> <a name="exchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```typescript
public readonly exchangeParametersInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `exchangeParameters`<sup>Required</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```typescript
public readonly exchangeParameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials">putOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resetOAuthClientCredentials">resetOAuthClientCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOAuthClientCredentials` <a name="putOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```typescript
public putOAuthClientCredentials(value: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---

##### `resetOAuthClientCredentials` <a name="resetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```typescript
public resetOAuthClientCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">oAuthClientCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oAuthClientCredentials`<sup>Required</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```typescript
public readonly oAuthClientCredentials: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `oAuthClientCredentialsInput`<sup>Optional</sup> <a name="oAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```typescript
public readonly oAuthClientCredentialsInput: IResolvable | DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsDynatraceOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAccountUrn">resetAccountUrn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---

##### `resetAccountUrn` <a name="resetAccountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAccountUrn"></a>

```typescript
public resetAccountUrn(): void
```

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrnInput">accountUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn">accountUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a>

---

##### `accountUrnInput`<sup>Optional</sup> <a name="accountUrnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrnInput"></a>

```typescript
public readonly accountUrnInput: string;
```

- *Type:* string

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---

##### `accountUrn`<sup>Required</sup> <a name="accountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```typescript
public readonly accountUrn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsDynatrace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---


### DevopsagentServiceServiceDetailsGitLabOutputReference <a name="DevopsagentServiceServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTargetUrl">resetTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetTargetUrl` <a name="resetTargetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTargetUrl"></a>

```typescript
public resetTargetUrl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenValue"></a>

```typescript
public resetTokenValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrlInput">targetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue">tokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `targetUrlInput`<sup>Optional</sup> <a name="targetUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrlInput"></a>

```typescript
public readonly targetUrlInput: string;
```

- *Type:* string

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValueInput"></a>

```typescript
public readonly tokenValueInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsGitLab;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyHeader">resetApiKeyHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyName">resetApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyValue">resetApiKeyValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKeyHeader` <a name="resetApiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyHeader"></a>

```typescript
public resetApiKeyHeader(): void
```

##### `resetApiKeyName` <a name="resetApiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyName"></a>

```typescript
public resetApiKeyName(): void
```

##### `resetApiKeyValue` <a name="resetApiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyValue"></a>

```typescript
public resetApiKeyValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeaderInput">apiKeyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyNameInput">apiKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValueInput">apiKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader">apiKeyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName">apiKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue">apiKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyHeaderInput`<sup>Optional</sup> <a name="apiKeyHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeaderInput"></a>

```typescript
public readonly apiKeyHeaderInput: string;
```

- *Type:* string

---

##### `apiKeyNameInput`<sup>Optional</sup> <a name="apiKeyNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyNameInput"></a>

```typescript
public readonly apiKeyNameInput: string;
```

- *Type:* string

---

##### `apiKeyValueInput`<sup>Optional</sup> <a name="apiKeyValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValueInput"></a>

```typescript
public readonly apiKeyValueInput: string;
```

- *Type:* string

---

##### `apiKeyHeader`<sup>Required</sup> <a name="apiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader"></a>

```typescript
public readonly apiKeyHeader: string;
```

- *Type:* string

---

##### `apiKeyName`<sup>Required</sup> <a name="apiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName"></a>

```typescript
public readonly apiKeyName: string;
```

- *Type:* string

---

##### `apiKeyValue`<sup>Required</sup> <a name="apiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue"></a>

```typescript
public readonly apiKeyValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">resetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenName">resetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationHeader` <a name="resetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```typescript
public resetAuthorizationHeader(): void
```

##### `resetTokenName` <a name="resetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```typescript
public resetTokenName(): void
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```typescript
public resetTokenValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorizationHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">tokenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorizationHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName">tokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue">tokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationHeaderInput`<sup>Optional</sup> <a name="authorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```typescript
public readonly authorizationHeaderInput: string;
```

- *Type:* string

---

##### `tokenNameInput`<sup>Optional</sup> <a name="tokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```typescript
public readonly tokenNameInput: string;
```

- *Type:* string

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```typescript
public readonly tokenValueInput: string;
```

- *Type:* string

---

##### `authorizationHeader`<sup>Required</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```typescript
public readonly authorizationHeader: string;
```

- *Type:* string

---

##### `tokenName`<sup>Required</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">resetExchangeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeUrl">resetExchangeUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```typescript
public resetClientName(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetExchangeParameters` <a name="resetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```typescript
public resetExchangeParameters(): void
```

##### `resetExchangeUrl` <a name="resetExchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeUrl"></a>

```typescript
public resetExchangeUrl(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">clientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchangeParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrlInput">exchangeUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">clientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchangeParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl">exchangeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```typescript
public readonly clientNameInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `exchangeParametersInput`<sup>Optional</sup> <a name="exchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```typescript
public readonly exchangeParametersInput: string;
```

- *Type:* string

---

##### `exchangeUrlInput`<sup>Optional</sup> <a name="exchangeUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrlInput"></a>

```typescript
public readonly exchangeUrlInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `exchangeParameters`<sup>Required</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```typescript
public readonly exchangeParameters: string;
```

- *Type:* string

---

##### `exchangeUrl`<sup>Required</sup> <a name="exchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl"></a>

```typescript
public readonly exchangeUrl: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken">putBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials">putOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetBearerToken">resetBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetOAuthClientCredentials">resetOAuthClientCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey"></a>

```typescript
public putApiKey(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---

##### `putBearerToken` <a name="putBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken"></a>

```typescript
public putBearerToken(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---

##### `putOAuthClientCredentials` <a name="putOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```typescript
public putOAuthClientCredentials(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetBearerToken` <a name="resetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetBearerToken"></a>

```typescript
public resetBearerToken(): void
```

##### `resetOAuthClientCredentials` <a name="resetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```typescript
public resetOAuthClientCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerTokenInput">bearerTokenInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">oAuthClientCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a>

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken"></a>

```typescript
public readonly bearerToken: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a>

---

##### `oAuthClientCredentials`<sup>Required</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```typescript
public readonly oAuthClientCredentials: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---

##### `bearerTokenInput`<sup>Optional</sup> <a name="bearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```typescript
public readonly bearerTokenInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---

##### `oAuthClientCredentialsInput`<sup>Optional</sup> <a name="oAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```typescript
public readonly oAuthClientCredentialsInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">resetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenName">resetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationHeader` <a name="resetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```typescript
public resetAuthorizationHeader(): void
```

##### `resetTokenName` <a name="resetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```typescript
public resetTokenName(): void
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```typescript
public resetTokenValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorizationHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">tokenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorizationHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName">tokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue">tokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationHeaderInput`<sup>Optional</sup> <a name="authorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```typescript
public readonly authorizationHeaderInput: string;
```

- *Type:* string

---

##### `tokenNameInput`<sup>Optional</sup> <a name="tokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```typescript
public readonly tokenNameInput: string;
```

- *Type:* string

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```typescript
public readonly tokenValueInput: string;
```

- *Type:* string

---

##### `authorizationHeader`<sup>Required</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```typescript
public readonly authorizationHeader: string;
```

- *Type:* string

---

##### `tokenName`<sup>Required</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken">putBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resetBearerToken">resetBearerToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBearerToken` <a name="putBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken"></a>

```typescript
public putBearerToken(value: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---

##### `resetBearerToken` <a name="resetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resetBearerToken"></a>

```typescript
public resetBearerToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerTokenInput">bearerTokenInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken"></a>

```typescript
public readonly bearerToken: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a>

---

##### `bearerTokenInput`<sup>Optional</sup> <a name="bearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```typescript
public readonly bearerTokenInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafana;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAlertPolicyIds">resetAlertPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApplicationIds">resetApplicationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetEntityGuids">resetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAlertPolicyIds` <a name="resetAlertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAlertPolicyIds"></a>

```typescript
public resetAlertPolicyIds(): void
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetApplicationIds` <a name="resetApplicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApplicationIds"></a>

```typescript
public resetApplicationIds(): void
```

##### `resetEntityGuids` <a name="resetEntityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetEntityGuids"></a>

```typescript
public resetEntityGuids(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIdsInput">alertPolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIdsInput">applicationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuidsInput">entityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds">alertPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds">applicationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids">entityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `alertPolicyIdsInput`<sup>Optional</sup> <a name="alertPolicyIdsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIdsInput"></a>

```typescript
public readonly alertPolicyIdsInput: string[];
```

- *Type:* string[]

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `applicationIdsInput`<sup>Optional</sup> <a name="applicationIdsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIdsInput"></a>

```typescript
public readonly applicationIdsInput: string[];
```

- *Type:* string[]

---

##### `entityGuidsInput`<sup>Optional</sup> <a name="entityGuidsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuidsInput"></a>

```typescript
public readonly entityGuidsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `alertPolicyIds`<sup>Required</sup> <a name="alertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds"></a>

```typescript
public readonly alertPolicyIds: string[];
```

- *Type:* string[]

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `applicationIds`<sup>Required</sup> <a name="applicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds"></a>

```typescript
public readonly applicationIds: string[];
```

- *Type:* string[]

---

##### `entityGuids`<sup>Required</sup> <a name="entityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey"></a>

```typescript
public putApiKey(value: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---


### DevopsagentServiceServiceDetailsMcpServerOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---


### DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetCustomHeaders">resetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetMcpRoleArn">resetMcpRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomHeaders` <a name="resetCustomHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetCustomHeaders"></a>

```typescript
public resetCustomHeaders(): void
```

##### `resetMcpRoleArn` <a name="resetMcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetMcpRoleArn"></a>

```typescript
public resetMcpRoleArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeadersInput">customHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArnInput">mcpRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders">customHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn">mcpRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customHeadersInput`<sup>Optional</sup> <a name="customHeadersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeadersInput"></a>

```typescript
public readonly customHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mcpRoleArnInput`<sup>Optional</sup> <a name="mcpRoleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArnInput"></a>

```typescript
public readonly mcpRoleArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders"></a>

```typescript
public readonly customHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mcpRoleArn`<sup>Required</sup> <a name="mcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn"></a>

```typescript
public readonly mcpRoleArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerSigV4;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">resetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenName">resetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationHeader` <a name="resetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```typescript
public resetAuthorizationHeader(): void
```

##### `resetTokenName` <a name="resetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```typescript
public resetTokenName(): void
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```typescript
public resetTokenValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorizationHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">tokenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorizationHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName">tokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue">tokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationHeaderInput`<sup>Optional</sup> <a name="authorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```typescript
public readonly authorizationHeaderInput: string;
```

- *Type:* string

---

##### `tokenNameInput`<sup>Optional</sup> <a name="tokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```typescript
public readonly tokenNameInput: string;
```

- *Type:* string

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```typescript
public readonly tokenValueInput: string;
```

- *Type:* string

---

##### `authorizationHeader`<sup>Required</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```typescript
public readonly authorizationHeader: string;
```

- *Type:* string

---

##### `tokenName`<sup>Required</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken">putBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resetBearerToken">resetBearerToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBearerToken` <a name="putBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken"></a>

```typescript
public putBearerToken(value: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---

##### `resetBearerToken` <a name="resetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resetBearerToken"></a>

```typescript
public resetBearerToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerTokenInput">bearerTokenInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken"></a>

```typescript
public readonly bearerToken: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a>

---

##### `bearerTokenInput`<sup>Optional</sup> <a name="bearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```typescript
public readonly bearerTokenInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunk;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---


### DevopsagentServiceServiceDetailsOutputReference <a name="DevopsagentServiceServiceDetailsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity">putAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace">putDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab">putGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer">putMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana">putMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic">putMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4">putMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk">putMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty">putPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetAzureIdentity">resetAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetDynatrace">resetDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetGitLab">resetGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServer">resetMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerGrafana">resetMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerNewRelic">resetMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSigV4">resetMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSplunk">resetMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetPagerDuty">resetPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureIdentity` <a name="putAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity"></a>

```typescript
public putAzureIdentity(value: DevopsagentServiceServiceDetailsAzureIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---

##### `putDynatrace` <a name="putDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace"></a>

```typescript
public putDynatrace(value: DevopsagentServiceServiceDetailsDynatrace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---

##### `putGitLab` <a name="putGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab"></a>

```typescript
public putGitLab(value: DevopsagentServiceServiceDetailsGitLab): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---

##### `putMcpServer` <a name="putMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer"></a>

```typescript
public putMcpServer(value: DevopsagentServiceServiceDetailsMcpServer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---

##### `putMcpServerGrafana` <a name="putMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana"></a>

```typescript
public putMcpServerGrafana(value: DevopsagentServiceServiceDetailsMcpServerGrafana): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---

##### `putMcpServerNewRelic` <a name="putMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic"></a>

```typescript
public putMcpServerNewRelic(value: DevopsagentServiceServiceDetailsMcpServerNewRelic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---

##### `putMcpServerSigV4` <a name="putMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4"></a>

```typescript
public putMcpServerSigV4(value: DevopsagentServiceServiceDetailsMcpServerSigV4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---

##### `putMcpServerSplunk` <a name="putMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk"></a>

```typescript
public putMcpServerSplunk(value: DevopsagentServiceServiceDetailsMcpServerSplunk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---

##### `putPagerDuty` <a name="putPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty"></a>

```typescript
public putPagerDuty(value: DevopsagentServiceServiceDetailsPagerDuty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow"></a>

```typescript
public putServiceNow(value: DevopsagentServiceServiceDetailsServiceNow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---

##### `resetAzureIdentity` <a name="resetAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetAzureIdentity"></a>

```typescript
public resetAzureIdentity(): void
```

##### `resetDynatrace` <a name="resetDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetDynatrace"></a>

```typescript
public resetDynatrace(): void
```

##### `resetGitLab` <a name="resetGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetGitLab"></a>

```typescript
public resetGitLab(): void
```

##### `resetMcpServer` <a name="resetMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServer"></a>

```typescript
public resetMcpServer(): void
```

##### `resetMcpServerGrafana` <a name="resetMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerGrafana"></a>

```typescript
public resetMcpServerGrafana(): void
```

##### `resetMcpServerNewRelic` <a name="resetMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerNewRelic"></a>

```typescript
public resetMcpServerNewRelic(): void
```

##### `resetMcpServerSigV4` <a name="resetMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSigV4"></a>

```typescript
public resetMcpServerSigV4(): void
```

##### `resetMcpServerSplunk` <a name="resetMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSplunk"></a>

```typescript
public resetMcpServerSplunk(): void
```

##### `resetPagerDuty` <a name="resetPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetPagerDuty"></a>

```typescript
public resetPagerDuty(): void
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetServiceNow"></a>

```typescript
public resetServiceNow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentity">azureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference">DevopsagentServiceServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference">DevopsagentServiceServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference">DevopsagentServiceServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference">DevopsagentServiceServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference">DevopsagentServiceServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference">DevopsagentServiceServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentityInput">azureIdentityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatraceInput">dynatraceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLabInput">gitLabInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafanaInput">mcpServerGrafanaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerInput">mcpServerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelicInput">mcpServerNewRelicInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4Input">mcpServerSigV4Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunkInput">mcpServerSplunkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDutyInput">pagerDutyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureIdentity`<sup>Required</sup> <a name="azureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentity"></a>

```typescript
public readonly azureIdentity: DevopsagentServiceServiceDetailsAzureIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference">DevopsagentServiceServiceDetailsAzureIdentityOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatrace"></a>

```typescript
public readonly dynatrace: DevopsagentServiceServiceDetailsDynatraceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference">DevopsagentServiceServiceDetailsDynatraceOutputReference</a>

---

##### `gitLab`<sup>Required</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLab"></a>

```typescript
public readonly gitLab: DevopsagentServiceServiceDetailsGitLabOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference">DevopsagentServiceServiceDetailsGitLabOutputReference</a>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServer"></a>

```typescript
public readonly mcpServer: DevopsagentServiceServiceDetailsMcpServerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference">DevopsagentServiceServiceDetailsMcpServerOutputReference</a>

---

##### `mcpServerGrafana`<sup>Required</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```typescript
public readonly mcpServerGrafana: DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `mcpServerNewRelic`<sup>Required</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```typescript
public readonly mcpServerNewRelic: DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `mcpServerSigV4`<sup>Required</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```typescript
public readonly mcpServerSigV4: DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `mcpServerSplunk`<sup>Required</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```typescript
public readonly mcpServerSplunk: DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `pagerDuty`<sup>Required</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDuty"></a>

```typescript
public readonly pagerDuty: DevopsagentServiceServiceDetailsPagerDutyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference">DevopsagentServiceServiceDetailsPagerDutyOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: DevopsagentServiceServiceDetailsServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference">DevopsagentServiceServiceDetailsServiceNowOutputReference</a>

---

##### `azureIdentityInput`<sup>Optional</sup> <a name="azureIdentityInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentityInput"></a>

```typescript
public readonly azureIdentityInput: IResolvable | DevopsagentServiceServiceDetailsAzureIdentity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---

##### `dynatraceInput`<sup>Optional</sup> <a name="dynatraceInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatraceInput"></a>

```typescript
public readonly dynatraceInput: IResolvable | DevopsagentServiceServiceDetailsDynatrace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---

##### `gitLabInput`<sup>Optional</sup> <a name="gitLabInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLabInput"></a>

```typescript
public readonly gitLabInput: IResolvable | DevopsagentServiceServiceDetailsGitLab;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---

##### `mcpServerGrafanaInput`<sup>Optional</sup> <a name="mcpServerGrafanaInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafanaInput"></a>

```typescript
public readonly mcpServerGrafanaInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafana;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---

##### `mcpServerInput`<sup>Optional</sup> <a name="mcpServerInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerInput"></a>

```typescript
public readonly mcpServerInput: IResolvable | DevopsagentServiceServiceDetailsMcpServer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---

##### `mcpServerNewRelicInput`<sup>Optional</sup> <a name="mcpServerNewRelicInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelicInput"></a>

```typescript
public readonly mcpServerNewRelicInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---

##### `mcpServerSigV4Input`<sup>Optional</sup> <a name="mcpServerSigV4Input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4Input"></a>

```typescript
public readonly mcpServerSigV4Input: IResolvable | DevopsagentServiceServiceDetailsMcpServerSigV4;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---

##### `mcpServerSplunkInput`<sup>Optional</sup> <a name="mcpServerSplunkInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunkInput"></a>

```typescript
public readonly mcpServerSplunkInput: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunk;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---

##### `pagerDutyInput`<sup>Optional</sup> <a name="pagerDutyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDutyInput"></a>

```typescript
public readonly pagerDutyInput: IResolvable | DevopsagentServiceServiceDetailsPagerDuty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNowInput"></a>

```typescript
public readonly serviceNowInput: IResolvable | DevopsagentServiceServiceDetailsServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---


### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">resetExchangeParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```typescript
public resetClientName(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetExchangeParameters` <a name="resetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```typescript
public resetExchangeParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">clientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchangeParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">clientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchangeParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```typescript
public readonly clientNameInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `exchangeParametersInput`<sup>Optional</sup> <a name="exchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```typescript
public readonly exchangeParametersInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `exchangeParameters`<sup>Required</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```typescript
public readonly exchangeParameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials">putOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resetOAuthClientCredentials">resetOAuthClientCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOAuthClientCredentials` <a name="putOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```typescript
public putOAuthClientCredentials(value: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---

##### `resetOAuthClientCredentials` <a name="resetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```typescript
public resetOAuthClientCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">oAuthClientCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oAuthClientCredentials`<sup>Required</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```typescript
public readonly oAuthClientCredentials: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `oAuthClientCredentialsInput`<sup>Optional</sup> <a name="oAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```typescript
public readonly oAuthClientCredentialsInput: IResolvable | DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsPagerDutyOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsPagerDuty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---


### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">resetExchangeParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```typescript
public resetClientName(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetExchangeParameters` <a name="resetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```typescript
public resetExchangeParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">clientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchangeParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">clientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchangeParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```typescript
public readonly clientNameInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `exchangeParametersInput`<sup>Optional</sup> <a name="exchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```typescript
public readonly exchangeParametersInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `exchangeParameters`<sup>Required</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```typescript
public readonly exchangeParameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials">putOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resetOAuthClientCredentials">resetOAuthClientCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOAuthClientCredentials` <a name="putOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```typescript
public putOAuthClientCredentials(value: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---

##### `resetOAuthClientCredentials` <a name="resetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```typescript
public resetOAuthClientCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">oAuthClientCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oAuthClientCredentials`<sup>Required</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```typescript
public readonly oAuthClientCredentials: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `oAuthClientCredentialsInput`<sup>Optional</sup> <a name="oAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```typescript
public readonly oAuthClientCredentialsInput: IResolvable | DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsServiceNowOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetInstanceUrl">resetInstanceUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```

##### `resetInstanceUrl` <a name="resetInstanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetInstanceUrl"></a>

```typescript
public resetInstanceUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrlInput">instanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---

##### `instanceUrlInput`<sup>Optional</sup> <a name="instanceUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrlInput"></a>

```typescript
public readonly instanceUrlInput: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceServiceDetailsServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---


### DevopsagentServiceTagsList <a name="DevopsagentServiceTagsList" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get"></a>

```typescript
public get(index: number): DevopsagentServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>[]

---


### DevopsagentServiceTagsOutputReference <a name="DevopsagentServiceTagsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer"></a>

```typescript
import { devopsagentService } from '@cdktn/provider-awscc'

new devopsagentService.DevopsagentServiceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentServiceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>

---



