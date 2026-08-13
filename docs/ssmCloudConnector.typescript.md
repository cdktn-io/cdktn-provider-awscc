# `ssmCloudConnector` Submodule <a name="`ssmCloudConnector` Submodule" id="@cdktn/provider-awscc.ssmCloudConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmCloudConnector <a name="SsmCloudConnector" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector awscc_ssm_cloud_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

new ssmCloudConnector.SsmCloudConnector(scope: Construct, id: string, config: SsmCloudConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig">SsmCloudConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig">SsmCloudConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration"></a>

```typescript
public putConfiguration(value: SsmCloudConnectorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags"></a>

```typescript
public putTags(value: IResolvable | SsmCloudConnectorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmCloudConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

ssmCloudConnector.SsmCloudConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

ssmCloudConnector.SsmCloudConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

ssmCloudConnector.SsmCloudConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

ssmCloudConnector.SsmCloudConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmCloudConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmCloudConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmCloudConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmCloudConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorArn">cloudConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorId">cloudConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference">SsmCloudConnectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList">SsmCloudConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArnInput">configConnectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArn">configConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudConnectorArn`<sup>Required</sup> <a name="cloudConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorArn"></a>

```typescript
public readonly cloudConnectorArn: string;
```

- *Type:* string

---

##### `cloudConnectorId`<sup>Required</sup> <a name="cloudConnectorId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorId"></a>

```typescript
public readonly cloudConnectorId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configuration"></a>

```typescript
public readonly configuration: SsmCloudConnectorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference">SsmCloudConnectorConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tags"></a>

```typescript
public readonly tags: SsmCloudConnectorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList">SsmCloudConnectorTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `configConnectorArnInput`<sup>Optional</sup> <a name="configConnectorArnInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArnInput"></a>

```typescript
public readonly configConnectorArnInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | SsmCloudConnectorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SsmCloudConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]

---

##### `configConnectorArn`<sup>Required</sup> <a name="configConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArn"></a>

```typescript
public readonly configConnectorArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmCloudConnectorConfig <a name="SsmCloudConnectorConfig" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

const ssmCloudConnectorConfig: ssmCloudConnector.SsmCloudConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configConnectorArn">configConnectorArn</a></code> | <code>string</code> | The ARN of the AWS Config connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | The configuration for the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The IAM role ARN used by the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.description">description</a></code> | <code>string</code> | The description of the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]</code> | Tags to apply to the cloud connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configConnectorArn`<sup>Required</sup> <a name="configConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configConnectorArn"></a>

```typescript
public readonly configConnectorArn: string;
```

- *Type:* string

The ARN of the AWS Config connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#config_connector_arn SsmCloudConnector#config_connector_arn}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configuration"></a>

```typescript
public readonly configuration: SsmCloudConnectorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

The configuration for the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#configuration SsmCloudConnector#configuration}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The IAM role ARN used by the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#role_arn SsmCloudConnector#role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#description SsmCloudConnector#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SsmCloudConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]

Tags to apply to the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#tags SsmCloudConnector#tags}

---

### SsmCloudConnectorConfiguration <a name="SsmCloudConnectorConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

const ssmCloudConnectorConfiguration: ssmCloudConnector.SsmCloudConnectorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.property.azureConfiguration">azureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | Configuration for connecting to Azure. |

---

##### `azureConfiguration`<sup>Required</sup> <a name="azureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.property.azureConfiguration"></a>

```typescript
public readonly azureConfiguration: SsmCloudConnectorConfigurationAzureConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

Configuration for connecting to Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#azure_configuration SsmCloudConnector#azure_configuration}

---

### SsmCloudConnectorConfigurationAzureConfiguration <a name="SsmCloudConnectorConfigurationAzureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

const ssmCloudConnectorConfigurationAzureConfiguration: ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationId">applicationId</a></code> | <code>string</code> | The Azure AD application ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantId">tenantId</a></code> | <code>string</code> | The Azure AD tenant ID. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationDisplayName">applicationDisplayName</a></code> | <code>string</code> | The display name of the Azure AD application. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | The targets for the cloud connector. If omitted, the entire tenant is targeted. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantDisplayName">tenantDisplayName</a></code> | <code>string</code> | The display name of the Azure AD tenant. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The Azure AD application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#application_id SsmCloudConnector#application_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The Azure AD tenant ID. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#tenant_id SsmCloudConnector#tenant_id}

---

##### `applicationDisplayName`<sup>Optional</sup> <a name="applicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationDisplayName"></a>

```typescript
public readonly applicationDisplayName: string;
```

- *Type:* string

The display name of the Azure AD application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#application_display_name SsmCloudConnector#application_display_name}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.targets"></a>

```typescript
public readonly targets: SsmCloudConnectorConfigurationAzureConfigurationTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

The targets for the cloud connector. If omitted, the entire tenant is targeted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#targets SsmCloudConnector#targets}

---

##### `tenantDisplayName`<sup>Optional</sup> <a name="tenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantDisplayName"></a>

```typescript
public readonly tenantDisplayName: string;
```

- *Type:* string

The display name of the Azure AD tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#tenant_display_name SsmCloudConnector#tenant_display_name}

---

### SsmCloudConnectorConfigurationAzureConfigurationTargets <a name="SsmCloudConnectorConfigurationAzureConfigurationTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

const ssmCloudConnectorConfigurationAzureConfigurationTargets: ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.property.subscriptions">subscriptions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]</code> | List of Azure subscriptions. |

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.property.subscriptions"></a>

```typescript
public readonly subscriptions: IResolvable | SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]

List of Azure subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#subscriptions SsmCloudConnector#subscriptions}

---

### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

const ssmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions: ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Azure subscription. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.id">id</a></code> | <code>string</code> | The Azure subscription ID. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#id SsmCloudConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsmCloudConnectorTags <a name="SsmCloudConnectorTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

const ssmCloudConnectorTags: ssmCloudConnector.SsmCloudConnectorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#key SsmCloudConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#value SsmCloudConnector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#key SsmCloudConnector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_cloud_connector#value SsmCloudConnector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmCloudConnectorConfigurationAzureConfigurationOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

new ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetApplicationDisplayName">resetApplicationDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTenantDisplayName">resetTenantDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets"></a>

```typescript
public putTargets(value: SsmCloudConnectorConfigurationAzureConfigurationTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---

##### `resetApplicationDisplayName` <a name="resetApplicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetApplicationDisplayName"></a>

```typescript
public resetApplicationDisplayName(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTargets"></a>

```typescript
public resetTargets(): void
```

##### `resetTenantDisplayName` <a name="resetTenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTenantDisplayName"></a>

```typescript
public resetTenantDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference">SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayNameInput">applicationDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayNameInput">tenantDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayName">applicationDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayName">tenantDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targets"></a>

```typescript
public readonly targets: SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference">SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference</a>

---

##### `applicationDisplayNameInput`<sup>Optional</sup> <a name="applicationDisplayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayNameInput"></a>

```typescript
public readonly applicationDisplayNameInput: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | SsmCloudConnectorConfigurationAzureConfigurationTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---

##### `tenantDisplayNameInput`<sup>Optional</sup> <a name="tenantDisplayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayNameInput"></a>

```typescript
public readonly tenantDisplayNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `applicationDisplayName`<sup>Required</sup> <a name="applicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayName"></a>

```typescript
public readonly applicationDisplayName: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `tenantDisplayName`<sup>Required</sup> <a name="tenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayName"></a>

```typescript
public readonly tenantDisplayName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmCloudConnectorConfigurationAzureConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

new ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions"></a>

```typescript
public putSubscriptions(value: IResolvable | SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]

---

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resetSubscriptions"></a>

```typescript
public resetSubscriptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptionsInput">subscriptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptions"></a>

```typescript
public readonly subscriptions: SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList</a>

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptionsInput"></a>

```typescript
public readonly subscriptionsInput: IResolvable | SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmCloudConnectorConfigurationAzureConfigurationTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

new ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get"></a>

```typescript
public get(index: number): SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

new ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>

---


### SsmCloudConnectorConfigurationOutputReference <a name="SsmCloudConnectorConfigurationOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

new ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration">putAzureConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureConfiguration` <a name="putAzureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration"></a>

```typescript
public putAzureConfiguration(value: SsmCloudConnectorConfigurationAzureConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfiguration">azureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference">SsmCloudConnectorConfigurationAzureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfigurationInput">azureConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureConfiguration`<sup>Required</sup> <a name="azureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfiguration"></a>

```typescript
public readonly azureConfiguration: SsmCloudConnectorConfigurationAzureConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference">SsmCloudConnectorConfigurationAzureConfigurationOutputReference</a>

---

##### `azureConfigurationInput`<sup>Optional</sup> <a name="azureConfigurationInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfigurationInput"></a>

```typescript
public readonly azureConfigurationInput: IResolvable | SsmCloudConnectorConfigurationAzureConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmCloudConnectorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---


### SsmCloudConnectorTagsList <a name="SsmCloudConnectorTagsList" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

new ssmCloudConnector.SsmCloudConnectorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get"></a>

```typescript
public get(index: number): SsmCloudConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmCloudConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]

---


### SsmCloudConnectorTagsOutputReference <a name="SsmCloudConnectorTagsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer"></a>

```typescript
import { ssmCloudConnector } from '@cdktn/provider-awscc'

new ssmCloudConnector.SsmCloudConnectorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmCloudConnectorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>

---



