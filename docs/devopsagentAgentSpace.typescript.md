# `devopsagentAgentSpace` Submodule <a name="`devopsagentAgentSpace` Submodule" id="@cdktn/provider-awscc.devopsagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAgentSpace <a name="DevopsagentAgentSpace" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space awscc_devopsagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

new devopsagentAgentSpace.DevopsagentAgentSpace(scope: Construct, id: string, config: DevopsagentAgentSpaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig">DevopsagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig">DevopsagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putOperatorApp">putOperatorApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetOperatorApp">resetOperatorApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOperatorApp` <a name="putOperatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putOperatorApp"></a>

```typescript
public putOperatorApp(value: DevopsagentAgentSpaceOperatorApp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putOperatorApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putTags"></a>

```typescript
public putTags(value: IResolvable | DevopsagentAgentSpaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetOperatorApp` <a name="resetOperatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetOperatorApp"></a>

```typescript
public resetOperatorApp(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DevopsagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentAgentSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.operatorApp">operatorApp</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference">DevopsagentAgentSpaceOperatorAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList">DevopsagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.operatorAppInput">operatorAppInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operatorApp`<sup>Required</sup> <a name="operatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.operatorApp"></a>

```typescript
public readonly operatorApp: DevopsagentAgentSpaceOperatorAppOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference">DevopsagentAgentSpaceOperatorAppOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tags"></a>

```typescript
public readonly tags: DevopsagentAgentSpaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList">DevopsagentAgentSpaceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorAppInput`<sup>Optional</sup> <a name="operatorAppInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.operatorAppInput"></a>

```typescript
public readonly operatorAppInput: IResolvable | DevopsagentAgentSpaceOperatorApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DevopsagentAgentSpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAgentSpaceConfig <a name="DevopsagentAgentSpaceConfig" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

const devopsagentAgentSpaceConfig: devopsagentAgentSpace.DevopsagentAgentSpaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.name">name</a></code> | <code>string</code> | The name of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.description">description</a></code> | <code>string</code> | The description of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.locale">locale</a></code> | <code>string</code> | The locale for the AgentSpace, which determines the language used in agent responses. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.operatorApp">operatorApp</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app DevopsagentAgentSpace#operator_app}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#name DevopsagentAgentSpace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#description DevopsagentAgentSpace#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#kms_key_arn DevopsagentAgentSpace#kms_key_arn}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

The locale for the AgentSpace, which determines the language used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#locale DevopsagentAgentSpace#locale}

---

##### `operatorApp`<sup>Optional</sup> <a name="operatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.operatorApp"></a>

```typescript
public readonly operatorApp: DevopsagentAgentSpaceOperatorApp;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app DevopsagentAgentSpace#operator_app}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DevopsagentAgentSpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#tags DevopsagentAgentSpace#tags}

---

### DevopsagentAgentSpaceOperatorApp <a name="DevopsagentAgentSpaceOperatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

const devopsagentAgentSpaceOperatorApp: devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#iam DevopsagentAgentSpace#iam}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.property.idc">idc</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#idc DevopsagentAgentSpace#idc}. |

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.property.iam"></a>

```typescript
public readonly iam: DevopsagentAgentSpaceOperatorAppIam;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#iam DevopsagentAgentSpace#iam}.

---

##### `idc`<sup>Optional</sup> <a name="idc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.property.idc"></a>

```typescript
public readonly idc: DevopsagentAgentSpaceOperatorAppIdc;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#idc DevopsagentAgentSpace#idc}.

---

### DevopsagentAgentSpaceOperatorAppIam <a name="DevopsagentAgentSpaceOperatorAppIam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

const devopsagentAgentSpaceOperatorAppIam: devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app_role_arn DevopsagentAgentSpace#operator_app_role_arn}. |

---

##### `operatorAppRoleArn`<sup>Optional</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam.property.operatorAppRoleArn"></a>

```typescript
public readonly operatorAppRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app_role_arn DevopsagentAgentSpace#operator_app_role_arn}.

---

### DevopsagentAgentSpaceOperatorAppIdc <a name="DevopsagentAgentSpaceOperatorAppIdc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

const devopsagentAgentSpaceOperatorAppIdc: devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#idc_instance_arn DevopsagentAgentSpace#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app_role_arn DevopsagentAgentSpace#operator_app_role_arn}. |

---

##### `idcInstanceArn`<sup>Optional</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#idc_instance_arn DevopsagentAgentSpace#idc_instance_arn}.

---

##### `operatorAppRoleArn`<sup>Optional</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.property.operatorAppRoleArn"></a>

```typescript
public readonly operatorAppRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app_role_arn DevopsagentAgentSpace#operator_app_role_arn}.

---

### DevopsagentAgentSpaceTags <a name="DevopsagentAgentSpaceTags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

const devopsagentAgentSpaceTags: devopsagentAgentSpace.DevopsagentAgentSpaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#key DevopsagentAgentSpace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#value DevopsagentAgentSpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAgentSpaceOperatorAppIamOutputReference <a name="DevopsagentAgentSpaceOperatorAppIamOutputReference" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

new devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resetOperatorAppRoleArn">resetOperatorAppRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperatorAppRoleArn` <a name="resetOperatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resetOperatorAppRoleArn"></a>

```typescript
public resetOperatorAppRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArnInput">operatorAppRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `operatorAppRoleArnInput`<sup>Optional</sup> <a name="operatorAppRoleArnInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArnInput"></a>

```typescript
public readonly operatorAppRoleArnInput: string;
```

- *Type:* string

---

##### `operatorAppRoleArn`<sup>Required</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArn"></a>

```typescript
public readonly operatorAppRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAgentSpaceOperatorAppIam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a>

---


### DevopsagentAgentSpaceOperatorAppIdcOutputReference <a name="DevopsagentAgentSpaceOperatorAppIdcOutputReference" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

new devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resetIdcInstanceArn">resetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resetOperatorAppRoleArn">resetOperatorAppRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdcInstanceArn` <a name="resetIdcInstanceArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resetIdcInstanceArn"></a>

```typescript
public resetIdcInstanceArn(): void
```

##### `resetOperatorAppRoleArn` <a name="resetOperatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resetOperatorAppRoleArn"></a>

```typescript
public resetOperatorAppRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcApplicationArn">idcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArnInput">operatorAppRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `idcApplicationArn`<sup>Required</sup> <a name="idcApplicationArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcApplicationArn"></a>

```typescript
public readonly idcApplicationArn: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArnInput"></a>

```typescript
public readonly idcInstanceArnInput: string;
```

- *Type:* string

---

##### `operatorAppRoleArnInput`<sup>Optional</sup> <a name="operatorAppRoleArnInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArnInput"></a>

```typescript
public readonly operatorAppRoleArnInput: string;
```

- *Type:* string

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

---

##### `operatorAppRoleArn`<sup>Required</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArn"></a>

```typescript
public readonly operatorAppRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAgentSpaceOperatorAppIdc;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a>

---


### DevopsagentAgentSpaceOperatorAppOutputReference <a name="DevopsagentAgentSpaceOperatorAppOutputReference" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

new devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIam">putIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIdc">putIdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resetIam">resetIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resetIdc">resetIdc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIam` <a name="putIam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIam"></a>

```typescript
public putIam(value: DevopsagentAgentSpaceOperatorAppIam): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a>

---

##### `putIdc` <a name="putIdc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIdc"></a>

```typescript
public putIdc(value: DevopsagentAgentSpaceOperatorAppIdc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIdc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a>

---

##### `resetIam` <a name="resetIam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resetIam"></a>

```typescript
public resetIam(): void
```

##### `resetIdc` <a name="resetIdc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resetIdc"></a>

```typescript
public resetIdc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference">DevopsagentAgentSpaceOperatorAppIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.idc">idc</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference">DevopsagentAgentSpaceOperatorAppIdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.iamInput">iamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.idcInput">idcInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.iam"></a>

```typescript
public readonly iam: DevopsagentAgentSpaceOperatorAppIamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference">DevopsagentAgentSpaceOperatorAppIamOutputReference</a>

---

##### `idc`<sup>Required</sup> <a name="idc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.idc"></a>

```typescript
public readonly idc: DevopsagentAgentSpaceOperatorAppIdcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference">DevopsagentAgentSpaceOperatorAppIdcOutputReference</a>

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.iamInput"></a>

```typescript
public readonly iamInput: IResolvable | DevopsagentAgentSpaceOperatorAppIam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a>

---

##### `idcInput`<sup>Optional</sup> <a name="idcInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.idcInput"></a>

```typescript
public readonly idcInput: IResolvable | DevopsagentAgentSpaceOperatorAppIdc;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAgentSpaceOperatorApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

---


### DevopsagentAgentSpaceTagsList <a name="DevopsagentAgentSpaceTagsList" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

new devopsagentAgentSpace.DevopsagentAgentSpaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.get"></a>

```typescript
public get(index: number): DevopsagentAgentSpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAgentSpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>[]

---


### DevopsagentAgentSpaceTagsOutputReference <a name="DevopsagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-awscc'

new devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAgentSpaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>

---



