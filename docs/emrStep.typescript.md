# `emrStep` Submodule <a name="`emrStep` Submodule" id="@cdktn/provider-awscc.emrStep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStep <a name="EmrStep" id="@cdktn/provider-awscc.emrStep.EmrStep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step awscc_emr_step}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

new emrStep.EmrStep(scope: Construct, id: string, config: EmrStepConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig">EmrStepConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig">EmrStepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep">putHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetLogUri">resetLogUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStep.EmrStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrStep.EmrStep.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrStep.EmrStep.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.emrStep.EmrStep.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.emrStep.EmrStep.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.emrStep.EmrStep.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.emrStep.EmrStep.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.emrStep.EmrStep.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.emrStep.EmrStep.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.emrStep.EmrStep.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHadoopJarStep` <a name="putHadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep"></a>

```typescript
public putHadoopJarStep(value: EmrStepHadoopJarStep): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

---

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.emrStep.EmrStep.resetEncryptionKeyArn"></a>

```typescript
public resetEncryptionKeyArn(): void
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktn/provider-awscc.emrStep.EmrStep.resetLogUri"></a>

```typescript
public resetLogUri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmrStep resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.emrStep.EmrStep.isConstruct"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

emrStep.EmrStep.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

emrStep.EmrStep.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

emrStep.EmrStep.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

emrStep.EmrStep.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EmrStep resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmrStep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmrStep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmrStep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStep">hadoopJarStep</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference">EmrStepHadoopJarStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.stepId">stepId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailureInput">actionOnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStepInput">hadoopJarStepInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowIdInput">jobFlowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.logUriInput">logUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailure">actionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowId">jobFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.logUri">logUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrStep.EmrStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.emrStep.EmrStep.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStep.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.emrStep.EmrStep.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStep.EmrStep.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStep.EmrStep.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStep.EmrStep.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStep.EmrStep.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStep.EmrStep.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStep.EmrStep.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hadoopJarStep`<sup>Required</sup> <a name="hadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStep"></a>

```typescript
public readonly hadoopJarStep: EmrStepHadoopJarStepOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference">EmrStepHadoopJarStepOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stepId`<sup>Required</sup> <a name="stepId" id="@cdktn/provider-awscc.emrStep.EmrStep.property.stepId"></a>

```typescript
public readonly stepId: string;
```

- *Type:* string

---

##### `actionOnFailureInput`<sup>Optional</sup> <a name="actionOnFailureInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailureInput"></a>

```typescript
public readonly actionOnFailureInput: string;
```

- *Type:* string

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArnInput"></a>

```typescript
public readonly encryptionKeyArnInput: string;
```

- *Type:* string

---

##### `hadoopJarStepInput`<sup>Optional</sup> <a name="hadoopJarStepInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStepInput"></a>

```typescript
public readonly hadoopJarStepInput: IResolvable | EmrStepHadoopJarStep;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

---

##### `jobFlowIdInput`<sup>Optional</sup> <a name="jobFlowIdInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowIdInput"></a>

```typescript
public readonly jobFlowIdInput: string;
```

- *Type:* string

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.logUriInput"></a>

```typescript
public readonly logUriInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailure"></a>

```typescript
public readonly actionOnFailure: string;
```

- *Type:* string

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

---

##### `jobFlowId`<sup>Required</sup> <a name="jobFlowId" id="@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowId"></a>

```typescript
public readonly jobFlowId: string;
```

- *Type:* string

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-awscc.emrStep.EmrStep.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStep.EmrStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrStep.EmrStep.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStepConfig <a name="EmrStepConfig" id="@cdktn/provider-awscc.emrStep.EmrStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.Initializer"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

const emrStepConfig: emrStep.EmrStepConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.actionOnFailure">actionOnFailure</a></code> | <code>string</code> | This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.hadoopJarStep">hadoopJarStep</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.jobFlowId">jobFlowId</a></code> | <code>string</code> | A string that uniquely identifies the cluster (job flow). |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.name">name</a></code> | <code>string</code> | The name of the cluster step. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.logUri">logUri</a></code> | <code>string</code> | The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.actionOnFailure"></a>

```typescript
public readonly actionOnFailure: string;
```

- *Type:* string

This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#action_on_failure EmrStep#action_on_failure}

---

##### `hadoopJarStep`<sup>Required</sup> <a name="hadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.hadoopJarStep"></a>

```typescript
public readonly hadoopJarStep: EmrStepHadoopJarStep;
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed.

The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#hadoop_jar_step EmrStep#hadoop_jar_step}

---

##### `jobFlowId`<sup>Required</sup> <a name="jobFlowId" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.jobFlowId"></a>

```typescript
public readonly jobFlowId: string;
```

- *Type:* string

A string that uniquely identifies the cluster (job flow).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#job_flow_id EmrStep#job_flow_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the cluster step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#name EmrStep#name}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#encryption_key_arn EmrStep#encryption_key_arn}

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#log_uri EmrStep#log_uri}

---

### EmrStepHadoopJarStep <a name="EmrStepHadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.Initializer"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

const emrStepHadoopJarStep: emrStep.EmrStepHadoopJarStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.jar">jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#jar EmrStep#jar}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.args">args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#args EmrStep#args}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.mainClass">mainClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#main_class EmrStep#main_class}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.stepProperties">stepProperties</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#step_properties EmrStep#step_properties}. |

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#jar EmrStep#jar}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#args EmrStep#args}.

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#main_class EmrStep#main_class}.

---

##### `stepProperties`<sup>Optional</sup> <a name="stepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.stepProperties"></a>

```typescript
public readonly stepProperties: IResolvable | EmrStepHadoopJarStepStepProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#step_properties EmrStep#step_properties}.

---

### EmrStepHadoopJarStepStepProperties <a name="EmrStepHadoopJarStepStepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.Initializer"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

const emrStepHadoopJarStepStepProperties: emrStep.EmrStepHadoopJarStepStepProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#key EmrStep#key}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#value EmrStep#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#key EmrStep#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emr_step#value EmrStep#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrStepHadoopJarStepOutputReference <a name="EmrStepHadoopJarStepOutputReference" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

new emrStep.EmrStepHadoopJarStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties">putStepProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetStepProperties">resetStepProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStepProperties` <a name="putStepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties"></a>

```typescript
public putStepProperties(value: IResolvable | EmrStepHadoopJarStepStepProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetMainClass"></a>

```typescript
public resetMainClass(): void
```

##### `resetStepProperties` <a name="resetStepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetStepProperties"></a>

```typescript
public resetStepProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepProperties">stepProperties</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList">EmrStepHadoopJarStepStepPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jarInput">jarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepPropertiesInput">stepPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jar">jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClass">mainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stepProperties`<sup>Required</sup> <a name="stepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepProperties"></a>

```typescript
public readonly stepProperties: EmrStepHadoopJarStepStepPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList">EmrStepHadoopJarStepStepPropertiesList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jarInput"></a>

```typescript
public readonly jarInput: string;
```

- *Type:* string

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClassInput"></a>

```typescript
public readonly mainClassInput: string;
```

- *Type:* string

---

##### `stepPropertiesInput`<sup>Optional</sup> <a name="stepPropertiesInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepPropertiesInput"></a>

```typescript
public readonly stepPropertiesInput: IResolvable | EmrStepHadoopJarStepStepProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>[]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrStepHadoopJarStep;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

---


### EmrStepHadoopJarStepStepPropertiesList <a name="EmrStepHadoopJarStepStepPropertiesList" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

new emrStep.EmrStepHadoopJarStepStepPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get"></a>

```typescript
public get(index: number): EmrStepHadoopJarStepStepPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrStepHadoopJarStepStepProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>[]

---


### EmrStepHadoopJarStepStepPropertiesOutputReference <a name="EmrStepHadoopJarStepStepPropertiesOutputReference" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer"></a>

```typescript
import { emrStep } from '@cdktn/provider-awscc'

new emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrStepHadoopJarStepStepProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>

---



